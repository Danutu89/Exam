from rest_framework import serializers
from .models import View
from dry_rest_permissions.generics import DRYPermissionsField
import calendar


class ViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = View
        fields = "__all__"


class ViewAnalyzedSerializer(serializers.Serializer):
    count = serializers.IntegerField()
    day = serializers.SerializerMethodField()

    class Meta:
        fields = ["count", "day"]

    def get_day(self, obj):
        return calendar.day_name[obj["date"].weekday()]


class UserCountAnalyzedSerializer(serializers.Serializer):
    unique = serializers.IntegerField()
    new = serializers.IntegerField()
    total = serializers.IntegerField()

    class Meta:
        fields = ["unique", "new", "total"]


class ViewsCountAnalyzedSerializer(serializers.Serializer):
    unique = serializers.IntegerField()
    new = serializers.IntegerField()
    total = serializers.IntegerField()

    class Meta:
        fields = ["unique", "new", "total"]


class DataAnalyzedSerializer(serializers.Serializer):
    users = UserCountAnalyzedSerializer(many=False)
    views = ViewsCountAnalyzedSerializer(many=False)

    class Meta:
        fields = ["users", "views"]
