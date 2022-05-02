from django.contrib import admin
from backend.models import NewUser
from django.contrib.auth.admin import UserAdmin
from products.models import Products
from backend.models import NewUser
admin.site.register(Products)





class UserAdminConfig(UserAdmin):
    ordering=('user_name',)
    list_display=('email','user_name','first_name','is_active','is_staff','is_superuser')
    fieldsets=(
        (None,{'fields':('email','user_name','first_name')}),
        ('Permissions',{'fields':('is_staff','is_active','is_superuser')}),
        ('Personal',{'fields':('about',)}),

    )

admin.site.register(NewUser,UserAdminConfig)
# Register your models here.



# Register your models here.
