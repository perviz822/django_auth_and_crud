from django.shortcuts import render
from rest_framework import generics;
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from django.http import HttpResponse, JsonResponse
from yaml import serialize
from products.models import Products
from products.serializers import ProductsSerializer,CustomUserSerializer
from backend.models import NewUser
from rest_framework.permissions import AllowAny
from rest_framework import permissions, authentication

@api_view (["GET"])
@permission_classes([permissions.IsAuthenticated])
def list_view(request):
    instances=Products.objects.all();
    serializer=ProductsSerializer(instances,many=True);
    return JsonResponse(serializer.data,safe=False)

@api_view(["POST"])
def post(request):
   serializer= ProductsSerializer(data=request.data);
   if serializer.is_valid():
    instance=Products.objects.create(**request.data);
    instance.save();
   else:
        return HttpResponse("INVALID DATA") 



@api_view(["DELETE"]) 
def delete(request)  :
    instance=Products.objects.get(id=request.data['id']);
    instance.delete();
    return request.data['id']


@api_view(["POST"])
def retrieve(request):
    instance=Products.objects.get(id=request.data['id']);
    serializer=ProductsSerializer(instance);
    return JsonResponse(serializer.data)

@api_view(['POST'])
def update(request):
        instance=Products.objects.get(id=request.data['id']);
        instance.name=request.data['name']  
        instance.price=request.data['price'] 
        instance.expiration_date=request.data['expiration_date'] 
        instance.save();
        return HttpResponse("Update was succesfull")    

@api_view(["POST"])
def create_user(request):
    serializer=CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        instance=NewUser.objects.create(**request.data);
        instance.set_password(request.data['password'])
        instance.save();
        print("register was succesfull")
    else:
        print("Something went wrong")  

    return HttpResponse("Update was succesfull")      

      
  





    


   




