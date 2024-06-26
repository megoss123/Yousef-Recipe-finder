from django.urls import path
from . import views


urlpatterns = [
    path('', views.Home, name="home"),
    path('LoginPage/', views.login, name="login"),
    path('user/', views.user_main, name="user"),
    path('SignUp/', views.sign, name="sign"),
    path('Add/', views.add, name="add"),
    path('adminmain/', views.admin_main, name="admin"),
    path('Edit/', views.edit, name="edit"),  
    path('favourite/', views.favourite, name="favourite"),
    path('listo/', views.list_Recipe, name="list"),
    path('search/', views.search_recipes, name="search"),
    
]
