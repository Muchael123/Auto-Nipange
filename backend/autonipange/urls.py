
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/',include('users.urls'),name='users'),
    path('api/group/',include('groups.urls'),name='groups'),
    path('api/purchase/',include('purchaseairtime.urls'),name='purchases'),
    path('api/payment/',include('payments.urls')),
]
