from django.urls import path
from . import views

urlpatterns = [
    path('get_plans/', views.get_plans),
]
