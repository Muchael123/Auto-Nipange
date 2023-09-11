from django.urls import path
from . import views

urlpatterns = [
    path('pay/<str:id>',views.deposit)
]
