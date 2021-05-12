from django.db import models
from shortuuidfield import ShortUUIDField

# Create your models here.
class View(models.Model):

    id = ShortUUIDField(primary_key=True)
    session = models.CharField(max_length=200)
    route = models.CharField(max_length=200)

    created_on = models.DateTimeField(auto_now_add=True)
    created_on.editable = True

    def __str__(self):
        return self.session

    class Meta:
        verbose_name = "View"
        verbose_name_plural = "Views"
