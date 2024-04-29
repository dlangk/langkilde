import os, re

from post import Post


def get_memes():
    memes = []
    with open('pages/memes.md', 'r', encoding='utf-8') as file:
        for line in file:
            memes.append(line.strip())
    return memes


def get_posts():
    posts = []
    for filename in os.listdir('posts'):
        if filename.endswith('.md'):
            post = Post(os.path.join('posts', filename))
            if post.pub_date is not None:
                posts += [post.__dict__]
            else:
                print(f"Skipping post {filename} because it is missing a publication date.")
    posts.sort(key=lambda x: x['pub_date'], reverse=True)
    return posts


def get_post(slug):
    post = Post(os.path.join('posts', slug + '.md'))
    return post.__dict__


def post_to_string(post):
    string = "Blogpost: \n"
    string += f"Title: {post['title']}\n"
    string += f"Published: {post['pub_date']}\n"
    string += f"Content:\n{re.sub('<[^<]+?>', '', post['content'])}\n\n"
    return string
