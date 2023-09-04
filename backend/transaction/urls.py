from django.urls import path
from . import views

urlpatterns = [
    path('get_transaction/<str:transaction_id>/', views.get_transaction),
    path('get_transactions/<str:user_id>/', views.get_transactions),
]
