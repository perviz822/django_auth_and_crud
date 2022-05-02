import json
import requests



endpoint='http://127.0.0.1:8000/create_user/'


data={
    'email':'nuray922@gmail.com',
    'user_name':'nuray',
    'first_name':'nuray',
    'password':'nuray12345'
}


response=requests.post(endpoint,json=data);