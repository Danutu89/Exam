from django.db import models
from shortuuidfield import ShortUUIDField


class Category(models.Model):

    id = ShortUUIDField(primary_key=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="categories/images")
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = ""
        managed = True
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Company(models.Model):
    id = ShortUUIDField(primary_key=True)
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to="companies/logos")
    description = models.TextField()
    slug = models.SlugField()
    categories = models.ManyToManyField("companies.Category")
    owner = models.OneToOneField(
        "users.User", on_delete=models.CASCADE, related_name="company"
    )
    link = models.CharField(max_length=200, blank=True)

    def has_object_read_permission(self, request):
        return request.user.id == self.owner_id;

    def has_object_write_permission(self, request):
        return request.user.id == self.owner_id;

    @staticmethod
    def has_read_permission(request):
        return True

    @staticmethod
    def has_write_permission(request):
        return True

    @staticmethod
    def has_create_permission(request):
        return True

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"


class Image(models.Model):

    id = ShortUUIDField(primary_key=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="companies/images")
    company = models.ForeignKey(
        "companies.Company", on_delete=models.CASCADE, related_name="images"
    )

    def __str__(self):
        return self.company.name

    class Meta:
        verbose_name = "Image"
        verbose_name_plural = "Images"


class Presentation(models.Model):

    id = ShortUUIDField(primary_key=True)
    description = models.TextField()
    image = models.ImageField(upload_to="companies/presentations")
    reverse = models.BooleanField(default=False)
    company = models.ForeignKey(
        "companies.Company", on_delete=models.CASCADE, related_name="presentations"
    )

    def __str__(self):
        return self.company.name

    class Meta:
        db_table = ""
        managed = True
        verbose_name = "Presentation"
        verbose_name_plural = "Presentations"
