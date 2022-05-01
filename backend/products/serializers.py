from rest_framework import serializers
from products.models import Products




class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=['name','price','expiration_date'];
