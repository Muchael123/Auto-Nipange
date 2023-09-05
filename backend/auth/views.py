from django.shortcuts import render
from rest_framework.decorators import api_view

from rest_framework.response import Response
from nipangeapp.models import Users
from nipangeapp.serializers import UserSerializer

@api_view(['POST'])
def register(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        res = {"mes": "success"}
        return Response(res)
    err = {"mes": "error"}
    return Response(err)

@api_view(['POST'])
def login(request):
    user = request.data
    user = Users.objects.filter(email=user['email'],password=user['password'])
    if user:
        print(user)
        return Response({"mess":"successfully logged in"})
    else:
        return Response({"mess":"incorrect email or password"})

def logout(request):
    pass

@api_view(['PUT'])
def forgot_password(request):
    data = request.data
    if Users.email == data['email']:
        pass


def update_user(request):
    pass
