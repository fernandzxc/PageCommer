# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# # Create your views here.
# @api_view(['GET'])
# def hola_mundo(request):
#     return Response({
#         'mensaje': 'Hola Mundo',
#         'status': 'conectado'
#     })

from rest_framework import viewsets, permissions
from .models import Categoria, Producto, Usuario
from .serializers import CategoriaSerializer, ProductoSerializer, UsuarioSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all().order_by('tipo')
    serializer_class = CategoriaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all().order_by('Nombre')
    serializer_class = ProductoSerializer

    def get_queryset(self):
        return Producto.objects.all()

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    queryset.order_by('Id_usuario')
    serializer_class = UsuarioSerializer