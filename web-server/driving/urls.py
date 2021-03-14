from django.urls import path, include
from rest_framework.routers import DefaultRouter

from driving import views

router = DefaultRouter()
router.register(r"exampledrivers", views.ExampleDriverViewSet)
router.register(r"drivers", views.DriverViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
