# Generated by Django 3.2 on 2021-05-12 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0005_alter_company_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='link',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
