from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# import json

from .models import *
from .serializers import *

# Create your views here.


# @api_view(['GET'])
# def users(request):
#     user = User.objects.all()
#     serializer = UserSerializer(user, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def user(request, id):
#     user = User.objects.get(userId=id)
#     serializer = UserSerializer(user)
#     return Response(serializer.data)


@api_view
def group(request):
    pass


@api_view(['GET'])
def transactions(request):
    user = Transaction.objects.all()
    serializer = TransactionSerializer(user, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def transaction(request,txid):
    user = Transaction.objects.get(txid = txid) 
    serializer = TransactionSerializer(user)
    return Response(serializer.data)


@api_view
def plans(request):
    pass



