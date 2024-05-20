import auth
import subprocess

from flask import jsonify, Blueprint, session, abort

update_blueprint = Blueprint('update', __name__)


@update_blueprint.route('/update')
def update():
    user_info = session.get('user_info')
    print(user_info)
    if not user_info or user_info.get('email') not in auth.login.ALLOWED_EMAILS:
        abort(403)  # Forbidden access if user not allowed
    try:
        # Example command: List directory contents
        result = subprocess.run(['git', 'pull'], capture_output=True, text=True)
        if result.returncode == 0:
            return jsonify({
                'status': 'success',
                'output': result.stdout
            })
        else:
            return jsonify({
                'status': 'error',
                'output': result.stderr
            }), 400
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
