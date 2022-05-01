from django.db import models

from django.db import models

class Products (models.Model):
    name=models.CharField(max_length=255);
    price=models.DecimalField(max_digits=5,decimal_places=4);
    expiration_date=models.CharField(max_length=18);

# Create your models here.
