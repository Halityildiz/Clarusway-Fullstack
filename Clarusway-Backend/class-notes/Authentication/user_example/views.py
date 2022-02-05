from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

# Create your views here.
def home(request):
  return render( request, 'user_example/home.html')

def register(request):
  form = UserCreationForm()
  context = {
    'form':form
  }
  return render(request, "registration/register.html", context)