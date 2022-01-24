from unicodedata import name
from django.db import models

# Create your models here.
class Studnet (models.Model):
  first_name = models.CharField(max_length = 30)
  last_name = models.CharField(max_length = 30)
  number = models.IntegerField()
  about_me = models.TextField(blank = True, null = True)
  avatar = models.ImageField(blank = True, upload_to ="media/")
  
  def __str__(self):
    return f"{self.first_name} - {self.last_name}"
  
  class Meta:
    ordering = ["number"]
    verbose_name_plural = "Student_List"
    db_table = "Student_Table"