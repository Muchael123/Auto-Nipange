from django.db import models
from django.contrib.auth.models import User
import uuid

class UserID(models.CharField):
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

# Create your models here.

class User(models.Model):
    userid = UserID(primary_key=True,editable=False)
    username = models.CharField(max_length=255)
    email= models.CharField(max_length=255,unique=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    balance = models.FloatField(default=0.00)
    phone = models.CharField(max_length=20,unique=True)

    def __str__(self) -> str:
        return self.username
    


