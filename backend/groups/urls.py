from django.urls import path
from . import views

urlpatterns = [
    path('create_group/', views.create_group),
    path('get_group/<str:grp_id>/', views.get_group),
    path('get_groups/<str:admin_id>/', views.get_groups),
]
