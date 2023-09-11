from django.db import models
from users.models import User

# Create your models here.

class Payments(models.Model):
    paymentid = models.CharField(primary_key=True,editable=False,max_length=50)
    user = models.ForeignKey(User,on_delete=models.DO_NOTHING)
    date = models.DateTimeField( auto_now=True, auto_now_add=False)


    def __str__(self):
        return self.paymentid
    
