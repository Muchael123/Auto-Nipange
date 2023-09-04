from rest_framework.serializers import ModelSerializer

from .models import User, Transaction, Group, Plan


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['userId','phoneNo','email','name','balance']


class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['txid','txdate','userId']


class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class PlanSerializer(ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'
