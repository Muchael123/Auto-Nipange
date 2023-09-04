from django.shortcuts import render


from nipangeapp.models import User,Transaction
from nipangeapp.serializers import UserSerializer,TransactionSerializer
# Create your views here.

def pay(request):
    pass