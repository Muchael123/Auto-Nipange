from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from nipangeapp.models import Transaction
from nipangeapp.serializers import TransactionSerializer
# Create your views here.

@api_view(['GET'])
def get_transactions(request, user_id):
    transactions = Transaction.objects.filter(userId = user_id)
    serializer = TransactionSerializer(transactions,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_transaction(request, transaction_id):
    transaction = Transaction.objects.get(txid = transaction_id)
    serializer = TransactionSerializer(transaction)
    return Response(serializer.data)