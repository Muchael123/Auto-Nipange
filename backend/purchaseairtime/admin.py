from django.contrib import admin
from .models import GroupTransactions,UserTransactions

# Register your models here.

admin.site.register(GroupTransactions)
admin.site.register(UserTransactions)
