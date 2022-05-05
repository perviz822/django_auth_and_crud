from django.db import models
from backend.models import NewUser




class Post(models.Model):
    user_id=models.ForeignKey(NewUser,blank=False,on_delete=models.SET_NULL,null=True)
    content=models.CharField(max_length=2048)

# Create your models here.
