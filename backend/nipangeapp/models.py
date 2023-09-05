import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class TransactionID(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 8
        kwargs['unique'] = True
        super().__init__(*args, **kwargs)

    def generate_uuid(self):
        return str(uuid.uuid4())[:8]

    def pre_save(self, model_instance, add):
        value = getattr(model_instance, self.attname)
        if not value:
            value = self.generate_uuid()
            setattr(model_instance, self.attname, value)
        return value
class GroupID(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 8
        kwargs['unique'] = True
        super().__init__(*args, **kwargs)

    def generate_uuid(self):
        return str(uuid.uuid4())[:8]

    def pre_save(self, model_instance, add):
        value = getattr(model_instance, self.attname)
        if not value:
            value = self.generate_uuid()
            setattr(model_instance, self.attname, value)
        return value




class Users(AbstractUser):
    userId = models.UUIDField(default=uuid.uuid4, primary_key=True,editable=False,unique=True)
    phoneNo = models.CharField(max_length=15)
    name = models.CharField(max_length=15 ,default= '')
    balance = models.FloatField(default=0.0)
    

    def __str__(self):
        return self.first_name


class Transaction(models.Model):
    txid = TransactionID(primary_key=True,editable=False)
    txdate = models.DateTimeField(auto_now=True)
    userId = models.ForeignKey(Users, on_delete=models.CASCADE)  

    def __str__(self) -> str:
        return self.txid


class Plan(models.Model):
    planID = models.CharField(max_length=30, primary_key=True)
    planName = models.CharField(max_length=15)

    def __str__(self) -> str:
        return self.planName


class Group(models.Model):
    groupID = GroupID(primary_key=True,editable=False)
    groupName = models.CharField(max_length=15)
    planId = models.ForeignKey(Plan, on_delete=models.CASCADE)
    users = models.CharField(max_length=200,default=None)
    phone_number = models.CharField(max_length=15,default=None)
    admin = models.ForeignKey(Users, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.groupName