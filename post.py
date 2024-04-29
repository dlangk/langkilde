import re
import markdown


class Post:
    def __init__(self, path):
        self.path = path
        self.title = None
        self.slug = None
        self.content = None
        self.pub_date = None
        self.load_post()

    def load_post(self):
        """ Load and parse the post content from a Markdown file. """
        try:
            with open(self.path, 'r', encoding='utf-8') as file:
                content = file.read()
            metadata, content = self.parse_metadata(content)
            self.title = metadata.get('title')
            self.slug = metadata.get('slug')
            self.content = markdown.markdown(content)
            self.pub_date = metadata.get('pub_date')
            if self.pub_date is None:
                raise ValueError("Publication date is required.")

        except FileNotFoundError:
            print(f"File not found: {self.path}")
        except Exception as e:
            print(f"An error occurred: {e}")

    def parse_metadata(self, content):
        metadata = {}
        match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
        if match:
            front_matter = match.group(1).split('\n')
            for line in front_matter:
                key, value = line.split(':')
                metadata[key.strip()] = value.strip()
            content = content[match.end():]  # Remove the front matter from content
        return metadata, content

    def __str__(self):
        return f"Post(title={self.title}, slug={self.slug}, pub_date={self.pub_date})"
