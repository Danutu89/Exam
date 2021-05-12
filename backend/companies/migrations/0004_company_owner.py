# Generated by Django 3.2 on 2021-05-10 08:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("companies", "0003_company_categories"),
    ]

    operations = [
        migrations.AddField(
            model_name="company",
            name="owner",
            field=models.ForeignKey(
                default="8Dr78DzTrZbKG3T4Go8Ryg",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="company",
                to="users.user",
            ),
            preserve_default=False,
        ),
    ]