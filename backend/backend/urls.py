"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from products.views import list_view, post,delete,retrieve, update,create_user
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView
)
from post.views import get_your_posts,post_content
urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/',list_view),
    path('create/',post),
    path('delete/',delete),
    path('retrieve/',retrieve),
    path('update/',update),
    path('get_token/',TokenObtainPairView.as_view()),
    path('get_refresh_token/',TokenRefreshView.as_view()),
    path('create_user/',create_user),
    path('get_your_posts/',get_your_posts),
    path('post_content/',post_content)
]
