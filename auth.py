import json, os

from flask import request, jsonify, Blueprint, redirect, url_for, session
from google.auth.transport import requests as google_requests
from google.cloud import secretmanager
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow

PROJECT_ID = "733520977390"
SECRET_NAME = "google-oauth-daniel-langkilde"
ALLOWED_EMAILS = ["daniel.langkilde@gmail.com"]

login_blueprint = Blueprint('login', __name__)
callback_blueprint = Blueprint('callback', __name__)


def access_secret(project_id, secret_id, version_id="latest"):
    if os.getenv('FLASK_ENV') == 'development':
        # Optionally, use a different method to get secrets locally
        # For example, read from a local file or environment variable
        try:
            with open('client_secrets.json', 'r') as file:
                secrets = json.load(file)
                return secrets.get(secret_id, 'Secret not found')
        except FileNotFoundError:
            return 'Local secrets file not found'
    elif os.getenv('FLASK_ENV') == 'production':
        try:
            client = secretmanager.SecretManagerServiceClient()
            name = f"projects/{project_id}/secrets/{secret_id}/versions/{version_id}"
            # Access the secret version.
            response = client.access_secret_version(request={"name": name})
            # Return the decoded payload of the secret.
            return response.payload.data.decode('UTF-8')
        except FileNotFoundError:
            return 'Secret not found in secretmanager'


def get_flow():
    if os.getenv('FLASK_ENV') == 'development':
        print('Getting development flow from local file')
        return Flow.from_client_secrets_file(
            client_secrets_file='client_secrets.json',
            scopes=['openid',
                    'https://www.googleapis.com/auth/userinfo.email',
                    'https://www.googleapis.com/auth/userinfo.profile'],
            redirect_uri=url_for('callback.callback', _external=True, _scheme='http')
        )
    elif os.getenv('FLASK_ENV') == 'production':
        secret = access_secret(project_id=PROJECT_ID, secret_id=SECRET_NAME)
        print(secret)
        return Flow.from_client_secrets_file(
            client_secrets_file=secret,
            scopes=['openid',
                    'https://www.googleapis.com/auth/userinfo.email',
                    'https://www.googleapis.com/auth/userinfo.profile'],
            redirect_uri=url_for('callback', _external=True, _scheme='https')
        )


@login_blueprint.route('/login')
def login():
    flow = get_flow()
    authorization_url, state = flow.authorization_url()
    session['state'] = state
    return redirect(authorization_url)


@callback_blueprint.route('/auth/callback')
def callback():
    flow = get_flow()

    # Use the authorization server's response to fetch the OAuth2 tokens.
    flow.fetch_token(authorization_response=request.url)

    # Get credentials and fetch basic user info
    credentials = flow.credentials
    session_data = google_requests.Request()

    # Decode id token (contains user data) from credentials
    secret = access_secret(project_id=PROJECT_ID, secret_id=SECRET_NAME)
    id_info = id_token.verify_oauth2_token(credentials.id_token, session_data, flow.client_config['client_id'])
    session['user_info'] = id_info
    return jsonify(id_info)
