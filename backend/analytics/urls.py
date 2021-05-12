from django.conf.urls import url
from .views import DataView, ViewCreateView, ViewListView

urlpatterns = [
    url(r"data$", DataView.as_view(), name="views"),
    url(r"create/$", ViewCreateView.as_view(), name="create_view"),
    url(r"$", ViewListView.as_view(), name="views"),
]
