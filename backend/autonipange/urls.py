from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('accounts.urls')),
    path('airtimepurchase/',include('airtimepurchase.urls')),
    path('auth/',include('auth.urls')),
    path('groups/',include('groups.urls')),
    path('payments/',include('payments.urls')),
    path('plans/',include('plans.urls')),
    path('transaction/',include('transaction.urls')),
]
