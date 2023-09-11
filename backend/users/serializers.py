from rest_framework import serializers

from .models import User

class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userid','username','email','firstname','lastname','balance','password','phone']
        extra_kwargs = {
            "password": {"write_only":True},
            "userid":{"read_only":True}
        }


    