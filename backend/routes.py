from flask import Blueprint, render_template, session, url_for, redirect, Flask, jsonify
import requests
import json
import datetime
from backend.air_quality_api import get_api_category_all_zips

main = Blueprint('main', __name__)

@main.route('/')
def home():
    all_zip_air_quality = get_api_category_all_zips()
    return all_zip_air_quality



