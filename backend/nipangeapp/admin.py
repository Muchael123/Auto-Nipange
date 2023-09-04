from django.contrib import admin

from .models import Plan,User,Group,Transaction

# Register your models here.
# admin.register()
admin.site.register(Plan)
admin.site.register(User)
admin.site.register(Group)
admin.site.register(Transaction)