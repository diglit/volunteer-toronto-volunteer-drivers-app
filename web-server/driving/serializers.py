from rest_framework import serializers
from driving.models import ExampleDriver
from driving.models import Driver


class ExampleDriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleDriver
        fields = ["created", "name"]


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ["created", "name", "status", "email", "advisor_name", 
        "languages", "organization_referral", "second_match", "community",
         "other", "contactless", "high_risk_contact", "up_to_thirty", "up_to_fifty",
          "packaging_sorting", "car_access", "van_truck_access", "one_mill_insurance",
           "two_mill_insurance", "G_license", "other_license_class"]
    #TODO: Add availability, policecheck, and driversabstract fields once they are created