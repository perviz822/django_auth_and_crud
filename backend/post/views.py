from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework import permissions
from backend.models import NewUser
from post.models import Post
from post.serializer import PostSerializer



@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def post_content(request):
    current_user=request.user
    print(request.user)
    user_id=current_user.id;
    print(request.data['content'])
    print("the user id is:" + " "+ str(user_id))
    user_instance=NewUser.objects.get(id=user_id)
    post_instance=Post.objects.create(user_id=user_instance,content=request.data['content'])
    post_instance.save();
    return HttpResponse("post succesfully created")

@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
def get_your_posts(request):
    print(request.user)
    instances=Post.objects.all().filter(user_id=request.user.id)
    print(instances)
    serializer=PostSerializer(instances,many=True);
    return JsonResponse(serializer.data,safe=False)
    
