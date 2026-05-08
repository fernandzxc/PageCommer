from django.contrib.auth.hashers import make_password, check_password
from django.db import models

# Create your models here.
class Producto(models.Model):
    Id_producto = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100, unique=True)
    Precio = models.IntegerField()
    Descripcion = models.TextField()
    imagen = models.ImageField(upload_to='react/src/assets/')

class Categoria(models.Model):
    Id_categoria = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=100, unique=True)

class Usuario(models.Model):
    Id_usuario = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=100, unique=True)
    Password = models.CharField(max_length=200, verbose_name="constraseña")


    