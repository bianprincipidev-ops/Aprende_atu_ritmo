from rest_framework import serializers
from .models import Compra

class CompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compra
        fields = ['id', 'nombre_cliente', 'email_cliente', 'curso_titulo', 'curso_precio', 'fecha_compra', 'verificado']
        read_only_fields = ['id', 'fecha_compra', 'verificado']