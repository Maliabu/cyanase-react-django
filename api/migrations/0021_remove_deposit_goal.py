# Generated by Django 4.1.3 on 2023-05-23 11:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_remove_goal_deposit_deposit_goal'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deposit',
            name='goal',
        ),
    ]
