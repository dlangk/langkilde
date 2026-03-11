import { visit } from "unist-util-visit";

export default function remarkConcepts() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      const regex = /\[~([^|]+)\|([^\]]+)\]/g;
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
        const term = match[1];
        const explanation = match[2];
        children.push({
          type: "html",
          value: `<span class="concept" data-explanation="${explanation.replace(/"/g, "&quot;")}">${term}</span>`,
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
