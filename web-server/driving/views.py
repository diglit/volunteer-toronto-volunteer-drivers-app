from rest_framework import viewsets

from driving.models import Driver
from driving.serializers import DriverSerializer
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = ['contactless','high_risk_contact','up_to_thirty','up_to_fifty',
                        'packaging_sorting','car_access','van_truck_access','one_mill_insurance',
                        'two_mill_insurance','g_license',]
    search_fields = ['name','email','advisor_name','languages','organization_referral',
                     'second_match','other','other_license_class']
    ordering_fields = ['name', 'email','advisor_name']
    ordering = ['advisor_name'] #TODO: change to name and email when not null

