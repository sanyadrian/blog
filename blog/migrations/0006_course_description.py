# Generated by Django 4.2.7 on 2024-09-04 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_course_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='description',
            field=models.TextField(max_length=1000, null=True),
        ),
    ]
