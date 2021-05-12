from django_filters import rest_framework as filters

from .models import Company


class CompanyFilter(filters.FilterSet):
    having_category = filters.Filter(field_name="categories__id", lookup_expr="exact")

    class Meta:
        model = Company
        fields = [
            "having_category",
        ]
