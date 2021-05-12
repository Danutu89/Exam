from rest_framework import serializers
from .models import Category, Company, Image, Presentation
from dry_rest_permissions.generics import DRYPermissionsField
from drf_writable_nested.serializers import WritableNestedModelSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"


class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentation
        fields = "__all__"


class CompanySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    presentations = PresentationSerializer(many=True)
    categories = CategorySerializer(many=True)

    class Meta:
        model = Company
        fields = "__all__"


class CompanyDetailedSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    presentations = PresentationSerializer(many=True)

    class Meta:
        model = Company
        fields = "__all__"