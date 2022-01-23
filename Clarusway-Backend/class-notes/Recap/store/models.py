from django.db import models

# Create your models here.
class Category(models.Model):
  name = models.Charfield(max_length = 50)
  # isActive = models.BooleanField()