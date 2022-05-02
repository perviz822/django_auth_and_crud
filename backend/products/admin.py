from django.contrib import admin
from backend.models import NewUser
from django.contrib.auth.admin import UserAdmin
from products.models import Products
from backend.models import NewUser
from django.forms import Textarea
admin.site.register(Products)


class UserAdminConfig(UserAdmin):
    ordering=('user_name',)
    list_display=('email','user_name','first_name','is_active','is_staff','is_superuser')
    fieldsets=(
        (None,{'fields':('email','user_name','first_name','password')}),
        ('Permissions',{'fields':('is_staff','is_active','is_superuser')}),
        ('Personal',{'fields':('about',)}),

    )


    formfield_overrides = {
        NewUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff','is_superuser')}
         ),
    )

admin.site.register(NewUser,UserAdminConfig)
# Register your models here.



# Register your models here.
