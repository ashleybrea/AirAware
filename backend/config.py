from dotenv import load_dotenv
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    AIR_QUALITY_API_KEY = os.environ.get('AIR_QUALITY_API_KEY')
