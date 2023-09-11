from rest_framework import serializers
from .models import GroupTransactions,UserTransactions


class GroupTransactionSerialiser(serializers.ModelSerializer):
    class Meta:
        model = GroupTransactions
        fields = '__all__'
        
class UserTransactionSerialiser(serializers.ModelSerializer):
    class Meta:
        model = UserTransactions
        fields = '__all__'
