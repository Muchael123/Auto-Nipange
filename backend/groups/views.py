from rest_framework.decorators import api_view
from rest_framework.response import Response
import pyrebase
from decouple import config
import requests
from .models import Group,Members
from .serialisers import GroupSerializer,MemberSerializer

FIREBASE_CONFIG = {
    "apiKey": config('FIREBASE_API_KEY'),
    "authDomain": config('FIREBASE_AUTH_DOMAIN'),
    "databaseURL": config('FIREBASE_DATABASE_URL'),
    "projectId": config('FIREBASE_PROJECT_ID'),
    "storageBucket": config('FIREBASE_STORAGE_BUCKET'),
    "messagingSenderId": config('FIREBASE_MESSAGING_SENDER_ID'),
    "appId": config('FIREBASE_APP_ID'),
    "measurementId": config('FIREBASE_MEASUREMENT_ID'),
}
firebase = pyrebase.initialize_app(FIREBASE_CONFIG)

storage = firebase.storage()
database = firebase.database()

# Create your views here.
@api_view(["POST"])
def create_group(request):
    try:
        name = request.data["name"]
        print(name)
        groups_ref = database.child("Groups")
        data = {"name": name}
        new_group_ref = groups_ref.push(data)
        group_id = new_group_ref["name"]
        return Response({"name": name, "id" : group_id})
    except requests.exceptions.HTTPError as error:
            print(error)
            error_message = error["error"]["message"]
            print(error_message)
            return Response({"mess":error})
@api_view(["GET"])
def groups(request):
    data = Group.objects.all()
    serializer = GroupSerializer(data,many=True)
    return Response(serializer.data)

@api_view(["POST"])
def add_members(request,groupid):
    data = request.data
    group_ref = database.child("Groups").child(groupid).child("members")
    members = {
        "phone":data['phone'],
        "amount": data["amount"],
        "interval": data["interval"]
    }
    group_ref.push(members)
    
    return Response(members)

@api_view(["GET"])
def group_members(request,id):
    # try:
    #     members = Members.objects.filter(group= id)
    #     group = Group.objects.get(groupid = id)
    # except :
    #     return Response({"message":"group does not exist"})
    # ser = GroupSerializer(group)
    # serialiser = MemberSerializer(members,many=True)
    response = {
        "groupname":ser.data["groupname"],
        "members": serialiser.data
    }
    # }
    return Response(response)