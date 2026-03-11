import { visit } from "unist-util-visit";

/**
 * Remark plugin for reference citations.
 *
 * Pass 1: Find the references ordered list and add id="ref-N" anchors.
 *         Detection strategy (in priority order):
 *           a) An ordered list preceded by any node containing the text "References"
 *           b) Fallback: the last ordered list in the document
 *
 * Pass 2: Transform inline [N] markers into clickable superscript links.
 */
export default function remarkReferences() {
  return (tree) => {
    // Collect all ordered lists and their positions
    const orderedLists = [];
    visit(tree, (node, index, parent) => {
      if (node.type === "list" && node.ordered) {
        orderedLists.push({ node, index, parent });
      }
    });

    if (orderedLists.length === 0) return;

    // Try to find an ordered list that follows a "References" label
    let refList = null;

    for (const entry of orderedLists) {
      const { index, parent } = entry;
      if (index === 0 || !parent?.children) continue;

      // Check the preceding sibling for "References" text
      const prev = parent.children[index - 1];
      if (prev && containsText(prev, "References")) {
        refList = entry;
        break;
      }
    }

    // Fallback: use the last ordered list in the document
    if (!refList) {
      refList = orderedLists[orderedLists.length - 1];
    }

    // Add id anchors to each list item
    const list = refList.node;
    const start = list.start || 1;
    list.children.forEach((item, i) => {
      if (item.type === "listItem") {
        const refNum = start + i;
        const anchor = {
          type: "html",
          value: `<a id="ref-${refNum}"></a>`,
        };
        item.children.unshift({ type: "paragraph", children: [anchor] });
      }
    });

    // Pass 2: Transform inline [N] markers into clickable links
    visit(tree, "text", (node, index, parent) => {
      const regex = /\[(\d{1,2})\]/g;
      const value = node.value;
      if (!regex.test(value)) return;

      regex.lastIndex = 0;
      const children = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(value)) !== null) {
        if (match.index > lastIndex) {
          children.push({ type: "text", value: value.slice(lastIndex, match.index) });
        }
        const num = match[1];
        children.push({
          type: "html",
          value: `<a href="#ref-${num}" class="ref-marker" data-ref="${num}">${num}</a>`,
        });
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < value.length) {
        children.push({ type: "text", value: value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...children);
    });
  };
}

/**
 * Recursively check if a node or any of its children contain the given text.
 * Works across all AST node types: headings, paragraphs, HTML, MDX JSX, etc.
 */
function containsText(node, text) {
  if (node.value && typeof node.value === "string" && node.value.includes(text)) {
    return true;
  }
  if (node.children) {
    return node.children.some((child) => containsText(child, text));
  }
  return false;
}
