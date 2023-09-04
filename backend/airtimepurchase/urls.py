from django.urls import path
from . import views

urlpatterns = [
    path('buy_group_airtime', views.purchase_group_airtime),
    path('buy_individual_airtime', views.purchase_personal_airtime)
]
