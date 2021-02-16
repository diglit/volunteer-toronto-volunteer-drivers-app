from rest_framework.decorators import api_view
from django.http import JsonResponse
    
@api_view(["GET"])
def testingSwagger(request):
    content = {"message": "Swagger Test"}
    return JsonResponse(content)