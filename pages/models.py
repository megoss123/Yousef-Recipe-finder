from django.db import models

# Create your models here.

class pages_recipee(models.Model):
    recipe_name = models.CharField(max_length=255)
    ingredients = models.TextField(max_length=300)
    description = models.TextField(max_length=255)
    quantity = models.TextField(max_length=255)
    course = models.CharField(max_length=50, choices=[
        ('appetizers', 'Appetizers'),
        ('main_course', 'Main Course'),
        ('dessert', 'Dessert')
    ])
    
    def __str__(self):
        return self.recipe_name


class Customer_And_Admin(models.Model):
    username = models.CharField(max_length=250)
    password = models.CharField(max_length=150)
    # confirmPassword = models.CharField(max_length=150)
    IsAdmin = models.BooleanField(default=False)
    email = models.EmailField(unique=True)


    def __str__(self):
        return self.username

# class Login_Users(models.Model):
#     username = models.CharField(max_length=250)
#     password = models.CharField(max_length=150)
    
#     def __str__(self):
#         return self.username
