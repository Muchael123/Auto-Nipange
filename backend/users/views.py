from django.contrib.auth.hashers import check_password,make_password
import jwt,time


from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import User
from .serializers import UserSerialiser

# Create your views here.


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serialiser = UserSerialiser(users,many=True)
    return Response(serialiser.data)

@api_view(['GET'])
def get_user(request,id):
    user = User.objects.get(userid=id)
    serializer = UserSerialiser(user)

    payload = {
        'userid': user.userid,
        "email": user.email,
        'lst':int(time.gmtime().tm_min) + 60
    }
    print(int(time.gmtime().tm_min) + 60 )
    token = jwt.encode(payload,'secret',algorithm='HS256')
    

    return Response(serializer.data)

@api_view(['POST'])
def create_user(request):
    data = request.data
    data['password'] = make_password(data['password'])
    serialiser = UserSerialiser(data=data)
    print(serialiser.is_valid())
    if serialiser.is_valid():
        serialiser.save()
        return Response({"message":"user created successfully"},status=status.HTTP_201_CREATED)
    
    return Response(serialiser.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    data = request.data   
    email = data['email']
    password = data['password']
    try:
        user = User.objects.get(email=email)
    except:
        return Response({"message":"user with that email does not exist"},status=status.HTTP_404_NOT_FOUND)
    if user:
        verify = check_password(password,user.password)
        if verify:
            return Response({"message":"Login successfully"},status=status.HTTP_202_ACCEPTED)
        else:
            return Response({"message":"incorrect password"},status=status.HTTP_401_UNAUTHORIZED)

@api_view(["PUT"])
def update_user_details(request,id):
    user = User.objects.get(userid=id)
    request.data['password'] = make_password(request.data['password'])
    ser = UserSerialiser(instance=user,data=request.data)
    if ser.is_valid():
        ser.save()
        return Response({"message":"User updated successfully!!!"})
    
    return Response(ser.errors)

"""sumary_line
{"username":"mikejoe2","email":"mike@mike123.com","firstname":"Joseph","lastname":"Mike","phone":"07846464711","password":"mikeeljo"}

Keyword arguments:
argument -- description
Return: return_description
"""
