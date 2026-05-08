from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Categoria, Producto

Username = get_user_model()

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['Id_categoria', 'tipo']

class ProductoSerializer(serializers.ModelSerializer):
    #categoria = CategoriaSerializer(read_only=True)

    """categoria_id = serializers.PrimaryKeyRelatedField(
        queryset = Categoria.objects.all(), source='categoria', write_only=True
    )"""

    class Meta:
        model = Producto
        fields = ['Id_producto', 'Nombre', 'Precio', 'Descripcion', 'imagen'] 

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Username 
        fields = ['Id_usuario', 'Username', 'Password']