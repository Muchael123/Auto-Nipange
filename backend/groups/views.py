from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Group,Members
from .serialisers import GroupSerializer,MemberSerializer

# Create your views here.
@api_view(["POST"])
def create_group(request):
    data = request.data
    serialiser = GroupSerializer(data=data)
    if serialiser.is_valid():
        serialiser.save()
        return Response({"mess":"group created successfully"})
    return Response(serialiser.errors)

@api_view(["GET"])
def groups(request):
    data = Group.objects.all()
    serializer = GroupSerializer(data,many=True)
    return Response(serializer.data)

@api_view(["POST"])
def add_members(request):
    data = request.data
    serialiser = MemberSerializer(data=data)
    if serialiser.is_valid():
        serialiser.save()
        return Response({"message":"member added successfully"})
    return Response(serialiser.errors)

@api_view(["GET"])
def group_members(request,id):
    try:
        members = Members.objects.filter(group= id)
        group = Group.objects.get(groupid = id)
    except:
        return Response({"message":"group does not exist"})
    ser = GroupSerializer(group)
    serialiser = MemberSerializer(members,many=True)
    response = {
        "groupname":ser.data["groupname"],
        "members": serialiser.data
        
    }
    return Response(response)