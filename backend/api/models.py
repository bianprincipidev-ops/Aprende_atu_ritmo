from django.db import models

class Compra(models.Model):
    nombre_cliente = models.CharField(max_length=150)
    email_cliente = models.EmailField()
    curso_titulo = models.CharField(max_length=200)
    curso_precio = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_compra = models.DateTimeField(auto_now_add=True)
    verificado = models.BooleanField(default=False) # Para que marque si el pago fue verificado o no

    def __str__(self):
        return f"Compra de {self.nombre_cliente} - Curso: {self.curso_titulo} - Precio: {self.curso_precio} - Verificado: {self.verificado}"