from flask import Flask, render_template, send_from_directory, jsonify, request

from post import Post
from rss import rss_blueprint
from search import search_blueprint

from utils import get_posts, get_memes

app = Flask(__name__)

app.register_blueprint(search_blueprint, url_prefix='/')
app.register_blueprint(rss_blueprint, url_prefix='/')


@app.route('/')
def index():
    posts = get_posts()
    latest_post = posts[0] if posts else None
    return render_template('index.html',
                           posts=posts,
                           post=latest_post)


@app.route('/memes')
def memes():
    memes = get_memes()
    return render_template('memes.html', memes=memes)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/posts')
def posts():
    posts = get_posts()
    latest_post = posts[0] if posts else None
    return render_template('index.html',
                           posts=posts,
                           post=latest_post)


@app.route('/post/<slug>')
def post(slug):
    # Here, fetch the post using the slug
    # This is a pseudo-code function to retrieve a post; implement it according to your data storage
    post = Post("posts/" + slug + ".md")
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Return only the necessary part of the post for AJAX requests
        return jsonify(title=post.title, pub_date=post.pub_date, content=post.content)
    else:
        # Return full page template if not an AJAX request
        return render_template('post.html', post=post)


@app.route('/images/<filename>')
def custom_image(filename):
    return send_from_directory('static/images', filename)


if __name__ == "__main__":
    app.run(debug=True)
