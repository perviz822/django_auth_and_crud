from django.shortcuts import render
from rest_framework import generics;
from rest_framework.decorators import api_view;
from django.http import HttpResponse, JsonResponse
from products.models import Products
from products.serializers import ProductsSerializer


@api_view (["GET"])
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
    print(request.data)
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




    


   




