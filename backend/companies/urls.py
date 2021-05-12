from django.conf.urls import url
from .views import CategoryListView, CategoryView, CompanyDetailedView, CompanyListView, CompanyView

urlpatterns = [
    url(r"categories/(?P<pk>\w+)$", CategoryView.as_view(), name="category"),
    url(r"categories/$", CategoryListView.as_view(), name="categories"),
    url(r"update/$", CompanyDetailedView.as_view(), name="company_update"),
    url(r"(?P<pk>\w+)$", CompanyView.as_view(), name="company"),
    url(r"$", CompanyListView.as_view(), name="companies"),
]
