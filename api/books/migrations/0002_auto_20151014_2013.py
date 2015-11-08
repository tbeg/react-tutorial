# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(max_length=16, choices=[('CRIME', 'Crime'), ('HISTORY', 'History'), ('HORROR', 'Horror'), ('SCIFI', 'Sci-fi')]),
        ),
    ]
