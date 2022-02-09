
from django.urls import path
from .views import home, student_add, student_detail,student_list, student_update, student_delete

urlpatterns = [
    path('', home, name= "home"),
    path("student_list/", student_list, name= "list"),
    path("student_add/", student_add, name= "add"),
    path("detail/<int:id>", student_detail, name= "detail"),
    path("update/<int:id>", student_update, name= "update"),
    path("delete/<int:id>", student_delete, name= "delete")
] 