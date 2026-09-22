from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from .serializers import CompraSerializer

@api_view(['POST'])
def registrar_compra(request):
    serializer = CompraSerializer(data=request.data)
    if serializer.is_valid():
        compra = serializer.save()
        
        # 1. Email para el CLIENTE con la confirmación e instrucciones
        asunto_cliente = f"¡Tus accesos para {compra.curso_titulo} en Aprende a tu ritmo!"
        mensaje_cliente = f"""
Hola {compra.nombre_cliente},

¡Gracias por registrar tu compra! Una vez que verifiquemos la transferencia por ${compra.curso_precio} ARS, 
te enviaremos el acceso definitivo a tu curso.

Cualquier consulta, respondé a este correo.
Equipo de Aprende a tu ritmo
        """
        
        send_mail(
            subject=asunto_cliente,
            message=mensaje_cliente.strip(),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[compra.email_cliente],
            fail_silently=False,
        )

        # 2. Email para la DUEÑA avisando de la venta pendiente de verificación
        asunto_duena = f"Nueva venta pendiente: {compra.curso_titulo} - ${compra.curso_precio}"
        mensaje_duena = f"""
¡Hola! Tenés una nueva solicitud de compra en la plataforma.

- Cliente: {compra.nombre_cliente}
- Email: {compra.email_cliente}
- Curso: {compra.curso_titulo}
- Precio: ${compra.curso_precio} ARS

Recordá verificar tu cuenta bancaria para confirmar la transferencia.
        """
        
        send_mail(
            subject=asunto_duena,
            message=mensaje_duena.strip(),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL.split('<')[-1].strip('>')],
            fail_silently=False,
        )

        return Response({
            "mensaje": "Compra registrada con éxito y correos simulados en consola.",
            "datos": serializer.data
        }, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)