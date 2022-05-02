from asyncio.windows_events import NULL
from django.db import  models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin, BaseUserManager


class CustomUserManager(BaseUserManager,):
        def create_superuser(self,email,user_name, password,first_name,about='',**other_fields):
                other_fields.setdefault('is_staff',True)
                other_fields.setdefault('is_superuser',True)
                other_fields.setdefault('is_active',True)
                if other_fields.get('is_staff') is not True:
                    raise ValueError('super  user must be assigned to is_staff= True')
                if other_fields.get('is_superuser') is not True:
                    raise ValueError('Super user must be assigned to is_super_user=True')
                return self.create_user(email,user_name, password,first_name=first_name,about='', **other_fields)   


        def create_user(self,email,user_name,password,first_name,about,**other_fields):
         if not email:
          raise ValueError(('You must provide an email address'))
         email=self.normalize_email(email); #for example ignore the case sensitivity
         user=self.model(email=email,user_name=user_name,first_name=first_name,about=about,**other_fields)
         user.set_password(password)
         user.save()
         return user;

     



class NewUser(AbstractBaseUser,PermissionsMixin):
        email=models.EmailField(max_length=255,unique=True)
        first_name=models.CharField(max_length=150,unique=True,blank=True)
        user_name=models.CharField(max_length=32,unique=True)
        about =models.CharField(max_length=512,blank=True,null=True)
        is_staff=models.BooleanField(default=False)
        is_active=models.BooleanField(default=False) 
        objects=CustomUserManager();
        USERNAME_FIELD='email'
        REQUIRED_FIELDS=['user_name','first_name']


        def __str__(self) :
            return self.user_name






        
