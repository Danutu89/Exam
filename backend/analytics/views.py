from rest_framework.views import APIView
from .models import View
from .serializers import (
    DataAnalyzedSerializer,
    ViewAnalyzedSerializer,
    ViewSerializer,
    ViewsCountAnalyzedSerializer,
)
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from django_filters import rest_framework as filters
from django.db.models.functions import TruncDay
from django.db.models.aggregates import Count
import datetime
from django.http.response import JsonResponse

# Create your views here.
class ViewListView(ListAPIView):
    serializer_class = ViewAnalyzedSerializer
    permission_classes = [IsAuthenticated]
    queryset = View.objects.all()

    def get_queryset(self):
        user = self.request.user
        now = datetime.datetime.now()
        end = now - datetime.timedelta(days=7)
        if user.company is not None:
            return (
                self.queryset.filter(route=f"/company/{user.company.id}")
                .annotate(date=TruncDay("created_on"))
                .values("date")
                .annotate(count=Count("session", distinct=True))
                .values(
                    "date",
                    "count",
                )
                .filter(created_on__range=[end, now])
                .all()
            )
        else:
            return []

    def paginate_queryset(self, queryset):
        return None


class DataView(APIView):
    permission_classes = [IsAuthenticated]
    queryset = View.objects.all()
    serializer_class = DataAnalyzedSerializer

    def get(self, request):
        user = self.request.user
        now = datetime.datetime.now()
        end = now - datetime.timedelta(days=7)

        total_views = self.queryset.filter(route=f"/company/{user.company.id}").count()
        new_views = (
            self.queryset.filter(route=f"/company/{user.company.id}")
            .annotate(count=Count("session", distinct=True))
            .filter(created_on__range=[end, now])
            .count()
        )
        unique_views = (
            self.queryset.filter(route=f"/company/{user.company.id}")
            .annotate(count=Count("session", distinct=True))
            .count()
        )

        serialized = ViewsCountAnalyzedSerializer(
            {"unique": unique_views, "total": total_views, "new": new_views}
        )

        return JsonResponse(serialized.data, safe=False)


class ViewCreateView(CreateAPIView):
    serializer_class = ViewSerializer
    permission_classes = [AllowAny]
    queryset = View.objects.all()
