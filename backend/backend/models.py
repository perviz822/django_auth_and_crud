from django.db import  models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin, BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self,email,password,user_name,about,**other_fields):
     email=self.normalize_email(email); #for example ignore the case sensitivity
     user=self.model(email=email,user_name=user_name,about=about)
     user.set_password(password)
     user.save()
     return user;


    def create_superuser(self, email,user_name,first_name,password,**other_fields):
            other_fields.setdefault('is_staff',True)
            other_fields.setdefault('is_superuser',True)
            other_fields.setdefault('is_active',True)

            if other_fields.get('is_staff') is not True:
                raise ValueError('super  user must be assigned to is_staf= True')

            if other_fields.get('is_superuser') is not True:
                raise ValueError('Super user must be assigned to is_super_user=True')

            return self.create_user (self,email,user_name,password,**other_fields)   



class NewUser(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(unique=True)
    user_name=models.CharField(unique=True)
    about =models.CharField(blank=True)
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=False) 
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['user_name']






      
