from rest_framework import serializers
from driving.models import ExampleDriver


class ExampleDriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleDriver
        fields = ["created", "name"]
