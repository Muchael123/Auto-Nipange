from django.contrib import admin

from .models import Plan,Users,Group,Transaction

# Register your models here.
# admin.register()
admin.site.register(Plan)
admin.site.register(Users)
admin.site.register(Group)
admin.site.register(Transaction)