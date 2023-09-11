from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import GroupTransactions,UserTransactions
from .serialisers import GroupTransactionSerialiser,UserTransactionSerialiser

from users.models import User
from users.serializers import UserSerialiser


@api_view(['POST'])
def add_group_transaction(request,id):
    transaction = request.data
    user = User.objects.get(userid=id)
    userserialiser = UserSerialiser(user)
    userbal = userserialiser.data['balance']
    transactionamount = transaction['amount']
    if transactionamount > userbal:
        return Response({"message":"balance too low"})
    serialiser = GroupTransactionSerialiser(data=transaction)
    if serialiser.is_valid():
        serialiser.save()
        user.balance = user.balance - transactionamount
        user.save()
        return Response({"message":"Transaction added successfully"})
    
"""
    {
"group":"f0b68544",
"amount":200
}
    """
    
@api_view(['POST'])
def add_user_transaction(request,id):
    transaction = request.data
    user = User.objects.get(userid=id)
    userserialiser = UserSerialiser(user)
    userbal = userserialiser.data['balance']
    transactionamount = transaction['amount']
    if transactionamount > userbal:
        return Response({"message":"balance too low"})
    serialiser = UserTransactionSerialiser(data=transaction)
    if serialiser.is_valid():
        serialiser.save()
        user.balance = user.balance - transactionamount
        user.save()
        return Response({"message":"Transaction added successfully"})
    return(serialiser.errors)
    
    # userid 54ec8180
    """
    {
"owner":"54ec8180",
"amount":269500
}
    """
    