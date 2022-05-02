from django.contrib import admin
from backend.models import NewUser
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):
    ordering=('-start_date',)
    list_display=('email','user_name','first_name','is_active','is_staff','is_superuser')


# Register your models here.
