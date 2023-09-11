from django.urls import path

from . import views

urlpatterns = [
    path('',views.get_users),
    path('create_user/',views.create_user),
    path('getuser/<str:id>/',views.get_user),
    path('login/',views.login),
    path('user/update/<str:id>',views.update_user_details),

]