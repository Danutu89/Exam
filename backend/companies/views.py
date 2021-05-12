from dry_rest_permissions.generics import DRYPermissions
from .filters import CompanyFilter
from .models import Category, Company
from companies.serializers import CategorySerializer, CompanyDetailedSerializer, CompanySerializer
from django.shortcuts import render
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from django_filters import rest_framework as filters

# Create your views here.
class CompanyListView(ListAPIView):
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]
    filterset_class = CompanyFilter
    filter_backends = [
        filters.DjangoFilterBackend,
    ]
    queryset = Company.objects.prefetch_related("categories", "owner").all()


class CompanyView(RetrieveAPIView):
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]
    queryset = Company.objects.prefetch_related(
        "categories", "owner", "presentations", "images"
    ).all()


class CategoryListView(ListAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    queryset = Category.objects.all()

    def paginate_queryset(self, queryset):
        return None


class CategoryView(RetrieveAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    queryset = Category.objects.all()


class CompanyDetailedView(RetrieveUpdateAPIView):
    serializer_class = CompanyDetailedSerializer
    permission_classes = [IsAuthenticated, DRYPermissions]
    queryset = Company.objects.all()

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(owner_id=user.id).first()

    def get_object(self):
        user = self.request.user
        return self.queryset.filter(owner_id=user.id).first()
