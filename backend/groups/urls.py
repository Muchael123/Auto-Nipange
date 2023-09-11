from django.urls import path

from . import views

urlpatterns = [
    path('creategroup/',views.create_group),
    path('groups/',views.groups),
    path('member/add/',views.add_members),
    path('groups/<str:id>/',views.group_members)
]
