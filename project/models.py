from flask_login import UserMixin
from sqlalchemy.orm import backref
from datetime import datetime
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy import create_engine, Column, Integer, String, text
from . import db


engine = create_engine('sqlite://', echo=False)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    posts = db.relationship('Post', backref='user')
    comments = db.relationship('Comment', backref='owner')

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    description = db.Column(db.String(200))
    sub = db.Column(db.String(50))
    votes = db.Column(db.Integer)
    subreddit_id = db.Column(db.Integer, db.ForeignKey('subreddit.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    comments = db.relationship('Comment', backref='parent')
    timestamp = db.Column(db.String(50))

class Subreddit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    description = db.Column(db.String(500), unique=True)
    posts = db.relationship('Post', backref='subreddit')

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    text = db.Column(db.String(500))
    author = db.Column(db.String(100))
    votes = db.Column(db.Integer)
    timestamp = db.Column(db.String(50))
    father_id = db.Column(db.Integer, db.ForeignKey('comment.id'))
    replies = db.relationship(
        'Comment', backref=db.backref('father', remote_side=[id]),
        lazy='dynamic')
