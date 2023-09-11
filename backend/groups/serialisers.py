from .models import Group,Members

from rest_framework import  serializers

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

        
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = '__all__'