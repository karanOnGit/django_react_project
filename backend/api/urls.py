from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("api", Application, basename="Application")
urlpatterns = router.urls
