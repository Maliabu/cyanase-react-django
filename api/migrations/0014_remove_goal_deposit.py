# Generated by Django 4.1.3 on 2023-05-22 09:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_goal_deposit'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='goal',
            name='deposit',
        ),
    ]
