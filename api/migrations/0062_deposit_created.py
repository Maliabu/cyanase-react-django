# Generated by Django 3.2.16 on 2023-08-27 12:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0061_remove_deposit_created'),
    ]

    operations = [
        migrations.AddField(
            model_name='deposit',
            name='created',
            field=models.DateTimeField(default=datetime.date(2023, 8, 27)),
        ),
    ]