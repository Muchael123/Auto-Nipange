from django.urls import path

from . import views

urlpatterns = [
    path('groupbuy/<str:id>/',views.add_group_transaction,name="groupbuy"),
    path('individualbuy/<str:id>/',views.add_user_transaction,name="individualbuy"),

]
