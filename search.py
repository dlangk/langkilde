import os

from flask import Flask, request, jsonify, Blueprint

app = Flask(__name__)

search_blueprint = Blueprint('search', __name__)


@search_blueprint.route('/search', methods=['GET'])
def search():
    query = request.args.get('query', '')
    if not query:
        return jsonify([])

    results = rank_markdown_files(query)
    return jsonify(results)


def rank_markdown_files(query):
    posts_directory = 'posts'  # Directory containing your markdown files
    scores = []

    for filename in os.listdir(posts_directory):
        if filename.endswith('.md'):
            filepath = os.path.join(posts_directory, filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            # Simple scoring: count the number of occurrences of the query
            score = content.lower().count(query.lower())
            if score > 0:
                scores.append({'file': filename, 'score': score})

    # Sort results by score in descending order
    scores.sort(key=lambda x: x['score'], reverse=True)
    return scores
