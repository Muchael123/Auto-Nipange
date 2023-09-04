from django.shortcuts import render
from rest_framework.decorators import api_view
from nipangeapp.models import Plan
from nipangeapp.serializers import PlanSerializer
from rest_framework.response import Response



@api_view(['GET'])
def get_plans(request):
    plans = Plan.objects.all()
    serializer = PlanSerializer(plans, many=True)
    return Response(serializer.data)

