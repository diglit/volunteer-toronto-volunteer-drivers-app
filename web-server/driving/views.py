from rest_framework import viewsets

from driving.models import ExampleDriver
from driving.serializers import ExampleDriverSerializer
from driving.models import Driver
from driving.serializers import DriverSerializer


class ExampleDriverViewSet(viewsets.ModelViewSet):
    queryset = ExampleDriver.objects.all()
    serializer_class = ExampleDriverSerializer


class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

