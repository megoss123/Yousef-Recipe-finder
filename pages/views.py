from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Customer_And_Admin , pages_recipee


# Create your views here.

 

def sign(request):
     
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        confirmpassword = request.POST['confirmPassword']
        email = request.POST['email']
        is_admin = 'ad' in request.POST

        if password == confirmpassword:
            
            if Customer_And_Admin.objects.filter(email=email).exists():
                messages.error(request, 'This mail signed up,use another one')
                return redirect('sign')  

            
            if Customer_And_Admin.objects.filter(username=username).exists():
                messages.error(request, 'Username already exists')
                return redirect('sign')  

            
            add_customer_and_admin = Customer_And_Admin(
                username=username,
                email=email,
                IsAdmin=is_admin,
                password=password,
            )
            
            add_customer_and_admin.save()
            
            messages.success(request, 'Account created successfully. Please log in.')
            return redirect('login')  
        else:
            messages.error(request, 'Passwords do not match')
            return redirect('sign')  

    # Fetch all users from the database
    all_customers_and_admins = Customer_And_Admin.objects.all()
    context = {
        'add_customer_and_admin': all_customers_and_admins,
    }
    
    return render(request, 'SignUp.html', context)




def login(request):
    if request.method == 'POST':
        username = request.POST.get('text-input')
        password = request.POST.get('password-input')

        if username and password:
            try:
                
                user = Customer_And_Admin.objects.get(username=username)
                
                
                if password == user.password:
                    
                    if user.IsAdmin:
                        return render(request, 'adminmain.html', {'user': user})
                    else:
                        return render(request, 'usermain.html', {'user': user})
                else:
                    
                    messages.error(request, 'Invalid username or password')
            
            except Customer_And_Admin.DoesNotExist:
                
                messages.error(request, 'Username  password not found. you SignUp')

    
    return render(request, 'LoginPage.html')

def add(request):
    if request.method == 'POST':
        recipe_name = request.POST.get('recipe_name')
        course = request.POST.get('course')
        ingredients = request.POST.get('ingredientName')
        quantities = request.POST.get('ingredientQuantity')
        description = request.POST.get('description')

        new_recipe = pages_recipee(
            recipe_name=recipe_name,
            course=course,
            description=description,
            ingredients=ingredients,
            quantity = quantities,
        )
        new_recipe.save()


        return redirect('add')

    all_recipe = pages_recipee.objects.all()
    context = {
        'new_recipe': all_recipe,
    }

    return render(request, 'Add.html', context)











def list_Recipe(request):

    if request.method == 'POST':
        recipe_name = request.POST.get('recipe_name')
        course = request.POST.get('course')
        ingredients = request.POST.get('ingredients')
        description = request.POST.get('description')
        quantity = request.POST.get('quantity')

        
        new_recipe = pages_recipee(
            recipe_name=recipe_name,
            course=course,
            ingredients=ingredients,
            description=description,
            quantity=quantity
        )
        new_recipe.save()

        # Redirect to the same page to display the updated list
        return redirect('list')

    # Retrieve all recipes from the database
    recipes = pages_recipee.objects.all()

    context = {
        'recipes': recipes
    }
    
         
    return render(request, 'listo.html', context)


def search_recipes(request):
    if request.method == 'GET':
        q = request.GET.get('q')
        if q:
            recipes = pages_recipee.objects.filter(recipe_name__icontains = q)
            return render(request, 'listo.html',{'recipes':recipes} )
        else:
            print("This recipe Not found")
            return render(request, 'search.html',{} )
            
       
        

def edit(request):
    return  render(request,'Edit.html')

def list(request):
    return  render(request,'listo.html')

def admin_main(request):
    return  render(request,'adminmain.html')

def favourite(request):
    return  render(request,'favourite.html')



def user_main(request):
    return  render(request,'usermain.html')
def Home(request):
    return  render(request,'Home.html')















































# def add_recipe_view(request):
#     if request.method == 'POST':
#         recipe_name = request.POST.get('recipe_name')
#         course = request.POST.get('course')
#         ingredients = request.POST.getlist('ingredientName')  
#         quantities = request.POST.getlist('ingredientQuantity')  
#         description = request.POST.get('description')

        
#         new_recipe = Recipe(
#             recipe_name=recipe_name,
#             course=course,
#             ingredients=ingredients,
#             quantity = quantities,
#             description=description
#         )
#         new_recipe.save()
#         all_recipe = Recipe.objects.all()
#         context = {
#             'new_recipe' : all_recipe, 
#         } 
   
        
#         # return redirect('add')

#     return render(request, 'Add.html', context)





# def add(request):
# #       if request.method == 'POST':
# #         recipe_name = request.POST.get('Recipe_Name')
# #         ingredients = request.POST.get('Ingredients')
# #         description = request.POST.get('Description')

#      return  render(request, 'Add.html')




# def list_view(request):
#     if request.method == 'POST':
#         recipe_name = request.POST.get('Recipe_Name')
#         ingredients = request.POST.get('Ingredients')
#         description = request.POST.get('Description')

#         # You can process the data here (e.g., save it to the database)
#         # For demonstration, we'll simply pass it back to the template

#     # Dummy recipe list for demonstration
#     recipes = [
#         {
            
#              'name': 'Pasta',
#              'ingredients': 'whiteSous chicken makrona',
#              'description': 'Beautiful',
#              'Course': 'main_course' ,
#              'quantity': 5  
#         },
#         {
            
#              'name': 'RiceWithCorn',
#              'ingredients': 'Rice Corn Oil',
#              'description': 'Nice',
#              'Course': 'main_course' ,
#              'quantity': 10 
#         },
#         {
            
#              'name': 'Pizza',
#              'ingredients': 'Flour Oil katshup',
#              'description': 'Good',
#              'Course': 'main_course' ,
#              'quantity': 20 
#         }
#     ]

    
#     add_recipe = Recipes{
#     recipeName =recipes.name,

#     }
#     context = {
#         'recipes': recipes
#     }

#     return render(request, 'listo.html', context)

# def list(request):
#     return render(request, 'listo.html')













#ajax funtion    
# def get_recipes(request):
#     search_term = request.GET.get('search', '')
#     if search_term:
#         recipes = Recipe.objects.filter(recipe_name__icontains=search_term)
#     else:
#         recipes = Recipe.objects.all()
    
#     data = list(recipes.values())  # Convert queryset to list of dictionaries
#     return JsonResponse(data, safe=False)






# def login(request):
#     if request.method == 'POST':
#         username = request.POST.get('text-input')
#         password = request.POST.get('password-input')

#         if username and password:
#             try:
#                 # Retrieve user from database
#                 user = Customer_And_Admin.objects.get(username=username)
                
#                 # Check if passwords match
#                 if password == user.password:
#                     # Passwords match, login the user
                    
#                     if user.IsAdmin:
#                         return render(request, 'adminmain.html', {'user': user})
#                     else:
#                         return render(request, 'usermain.html', {'user': user})
#                 else:
#                     # Passwords do not match
#                     return render(request, 'LoginPage.html', {'error': 'Invalid username or password'})
            
#             except Customer_And_Admin.DoesNotExist:
#                 # User with given username does not exist
#                 return render(request, 'LoginPage.html', {'error': 'Invalid username or password'})

#     return render(request, 'LoginPage.html')
















# def login(request):
#     if request.method == 'POST':
#         username = request.POST['text-input']
#         password = request.POST['password-input']
    
#     add_user = login(
#         user = username,
#         passNum = password,
#     )
#     add_user.save()

#     key = Customer_And_Admin(username,password)
#     value = login(username,password)
#     if(add_user.user == Customer_And_Admin.username & add_user.passNum == Customer_And_Admin.password):
#         if(Customer_And_Admin.IsAdmin == True):
#             return render(request, 'adminmain.html', add_user)
#         else:
#             return render(request, 'usermain.html', add_user)
        
#     else: 
#         return render(request, {'error': 'You should SignUP please'})





# from django.shortcuts import render, redirect
# from django.contrib.auth.hashers import make_password
# from .models import Customer_And_Admin
# from django.contrib.auth import authenticate, login


# def sign(request):   
#     if request.method == "POST":
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         confirm_password = request.POST.get('confirmPassword')
#         email = request.POST.get('email')
#         is_admin = 'ad' in request.POST

#         if password == confirm_password:
#             # Check if email already exists
#             if Customer_And_Admin.objects.filter(email=email).exists():
#                 return render(request, 'SignUp.html', {'error': 'Email already exists'})
            
#             hashed_password = make_password(password)
#             user = Customer_And_Admin(
#                 username=username,
#                 password=hashed_password,  # Store hashed password
#                 confirmPassword=hashed_password,
#                 email=email,
#                 IsAdmin=is_admin
#             )
#             user.save()
#             context = {
#                 'output': Customer_And_Admin,
#             }

#             # Authenticate and log in the user manually
#             authenticated_user = authenticate(username=username, password=password)
#             if authenticated_user:
#                 login(request, authenticated_user)
#                 return redirect('login')
#             else:
#                 return render(request, 'SignUp.html', {'error': 'Authentication failed'})
#         else:
#             return render(request, 'SignUp.html', {'error': 'Passwords do not match'})

#     return render(request, 'SignUp.html')

#ajax import
# from django.http import JsonResponse
# from .models import Recipe

# def login(request):
#     return render(request,'LoginPage.html')
# def sign(request):
#     if request.method == 'POST':
#         form = CustomUserCreationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('login')  # Redirect to login page after successful registration
#     else:
#         form = CustomUserCreationForm()
#     return render(request, 'SignUp.html', {'form': form})

# def sign(request):
#     return render(request, 'SignUp.html')

































# from django.views.generic import TemplateView

# # Login
# class login(TemplateView):
#     template_name=  'LoginPage.html'

# # Add
# class add(TemplateView):
#     template_name=  'Add.html'

# # Admin main
# class admin_main(TemplateView):
#     template_name=  'adminmain.html'
#     #return render(request, 'adminmain.html')

# # Edit
# class edit(TemplateView):
#     template_name=  'Edit.html'
#     #return render(request, 'Edit.html')

# # Favourite
# class favourite(TemplateView):
#     template_name=  'favourite.html'
    
#     #return render(request, 'favourite.html')

# # List
# class list_view(TemplateView):
#     template_name=  'listo.html'
#     #return render(request, 'listo.html')

# # Search
# class search(TemplateView):
#     template_name=  'search.html'

#     # return render(request, 'search.html')

# # User
# class user_main(TemplateView):
#     template_name=  'usermain.html'

#     #return render(request, 'usermain.html')

# # Sign up
# class sign(TemplateView):
#     template_name=  'SignUp.html'

# #home
# class Home(TemplateView):
#     template_name=  'Home.html'

#     #return render(request, 'SignUp.html')





# from django.shortcuts import render, redirect
# from django.contrib import messages
# from .models import Customer_And_Admin ,Login_Users

# def sign(request):
#     if request.method == 'POST':
#         username = request.POST['username']
#         password = request.POST['password']
#         confirmpassword = request.POST['confirmPassword']
#         email = request.POST['email']
#         is_admin = 'ad' in request.POST

#         if password == confirmpassword:
#             # Check if email already exists
#             if Customer_And_Admin.objects.filter(email=email).exists():
#                 return render(request, 'SignUp.html', {'error': 'Email already exists'})

#             # Check if username already exists
#             if Customer_And_Admin.objects.filter(username=username).exists():
#                 return render(request, 'SignUp.html', {'error': 'Username already exists'})

#             # Create a new user
#             add_customer_and_admin = Customer_And_Admin(
#                 username=username, 
#                 password=password, 
#                 email=email, 
#                 IsAdmin=is_admin, 
#             )
#             add_customer_and_admin.save()
           
            

#             return redirect('login')  # Assuming 'login' is the name of your login URL pattern
#         else:
#             return render(request, 'SignUp.html', {'error': 'Passwords do not match'})

#     # Fetch all users from the database
#     all_customers_and_admins = Customer_And_Admin.objects.all()
#     context = {
#         'add_customer_and_admin': all_customers_and_admins,
#     }

#     return render(request, 'SignUp.html', context)