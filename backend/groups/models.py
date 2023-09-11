from django.db import models

from users.models import User

import uuid

# Create your models here.
class GroupID(models.CharField):
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
    
plans = [
    ('zingatia','Zingatia'),
    ('tugawane','tugawane'),
]

class Group(models.Model):
    groupid = GroupID(primary_key=True,editable=False)
    groupname = models.CharField(max_length=50)
    groupadmin = models.ForeignKey(User,on_delete=models.CASCADE)
    plan = models.CharField(choices=plans,default='tugawane',max_length=20)

    def __str__(self):
        return self.groupname


class Members(models.Model):
    class Meta:
        unique_together = (('phone','group'))
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    group = models.ForeignKey(Group,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

"""
{
    "groupname":"group1",
    "groupadmin":"54ec8180",
    "plan":"zingatia"
}

{
    "name":"michael joseph",
    "phone":"0798467363",
    "group":"f0b68544"
}


Keyword arguments:
argument -- description
Return: return_description
"""
