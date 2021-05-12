from companies.models import Company, Image, Presentation, Category
from django.contrib import admin


class PresentationInline(admin.TabularInline):
    model = Presentation


class ImageInline(admin.TabularInline):
    model = Image


class CompanyAdmin(admin.ModelAdmin):
    model = Company
    inlines = [ImageInline, PresentationInline]


admin.site.register(Company, CompanyAdmin)
admin.site.register(Category)
