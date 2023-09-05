from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from nipangeapp.models import Users,Group
from nipangeapp.serializers import GroupSerializer

# Create your views here.

@api_view(['POST'])
def create_group(request):
    data = request.data
    serializer = GroupSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        res = {"mes": "success"}
        return Response(res)
    else:
        err = {"mes": "error"}
        return Response(err)

@api_view(['GET'])
def get_group(request,grp_id):
    group = Group.objects.filter(groupID = grp_id)
    serializer = GroupSerializer(group, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_groups(request,admin_id):
    group = Group.objects.filter(admin = admin_id)
    serializer = GroupSerializer(group, many=True)
    return Response(serializer.data)


def add_users(request,group_id):
    data = request.data
    pass
