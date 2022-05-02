from rest_framework import serializers
from products.models import Products
from backend.models import NewUser




class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=['name','price','expiration_date'];

class CustomUserSerializer(serializers.ModelSerializer):
 class Meta:
    model=  NewUser
    fields=['email','user_name','first_name','password'] 
