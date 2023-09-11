from django.db import models
from users.models import User
from groups.models import Group,Members
import uuid

# Create your models here.
class TransactionID(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 8
        kwargs['unique'] = True
        super().__init__(*args, **kwargs)

    def generate_uuid(self):
        return str(uuid.uuid4())[:8]

    def pre_save(self, model_instance, add):
        value = getattr(model_instance, self.attname)
        if not value:
            value = self.generate_uuid()
            setattr(model_instance, self.attname, value)
        return value
    

class UserTransactions(models.Model):
    transactionId = TransactionID(primary_key=True,editable=False)
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    amount = models.FloatField()

    def __str__(self):
        return self.transactionId


class GroupTransactions(models.Model):
    transactionId = TransactionID(primary_key=True,editable=False)
    group = models.ForeignKey(Group, on_delete=models.DO_NOTHING)
    amount = models.FloatField()

    def __str__(self) -> str:
        return self.transactionId
    
    """
    {
"group":"f0b68544",
"amount":200
}
    """
    