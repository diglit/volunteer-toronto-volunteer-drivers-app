from rest_framework import viewsets

from driving.models import ExampleDriver
from driving.serializers import ExampleDriverSerializer


class ExampleDriverViewSet(viewsets.ModelViewSet):
    queryset = ExampleDriver.objects.all()
    serializer_class = ExampleDriverSerializer
