# app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 
from models.user import db
from routes.login import login_bp
from routes.register import register_bp

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'DaJo'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://DaJo:123@localhost/punto_gamer'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.register_blueprint(login_bp)
    app.register_blueprint(register_bp)
    CORS(app)  # Habilita CORS para todas las rutas
    return app
