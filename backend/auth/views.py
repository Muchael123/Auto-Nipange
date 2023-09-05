from django.shortcuts import render
import pyrebase
from rest_framework.decorators import api_view
from rest_framework import status
from decouple import config
from rest_framework.response import Response
from nipangeapp.models import User
from nipangeapp.serializers import UserSerializer

config = {
     "apiKey": config('API_KEY'),
  "authDomain": config('AUTH_DORMAIN'),
  "projectId": config('PROJECT_ID'),
  "storageBucket": config('STORAGE_BUCKET'),
  "messagingSenderId": config('MESSAGING_SENDER_ID'),
  "appId": config('APP_ID'),
  "measurementId": config('MEASUREMENT_ID'),
  "databaseURL": config('DATABASE_URL')
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()

@api_view(['POST'])
def register(request):
    data = request.data
    username = data.get("username")
    email = data.get("email")
    users = db.child("Users").get()
    for user in users.each():
        if user.val().get("email") == email:
            return Response({"mess": "A user with that email already exists"}, status=status.HTTP_409_CONFLICT)
        elif user.val().get("username") == username:
            return Response({"mess": "Username already exists"})
    db.child("Users").child(username).set(data)
    return Response({"mess": "Success"})

    

@api_view(['POST'])
def login(request):
    user = request.data
    user = User.objects.filter(email=user['email'],password=user['password'])
    if user:
        print(user)
        return Response({"mess":"successfully logged in"})
    else:
        return Response({"mess":"incorrect email or password"})

def logout(request):
    pass



@api_view(['POST'])
def forgot_password(request):
    data = request.data
    user_email = User.objects.filter(email=data['email'])
    if user_email.exists():
       return Response({"mess": "Email sent successfully."})
    
    else:
       return Response({"mess":"An error occured!!"}) 

def update_user(request):
    pass
