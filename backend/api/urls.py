from django.urls import path
from .views import registrar_compra

urlpatterns = [
    path('registrar-compra/', registrar_compra, name='registrar-compra'),
]