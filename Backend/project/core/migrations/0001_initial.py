# Generated by Django 4.2.4 on 2023-08-23 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AMI',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Vegetables', 'Vegetables'), ('Fruits', 'Fruits'), ('Pulses', 'Pulses'), ('grains', 'Grains'), ('fiber', 'Fiber')], max_length=30)),
                ('name', models.CharField(max_length=20)),
                ('soil', models.CharField(choices=[('Red', 'Red'), ('Black', 'Black'), ('Alluvial', 'Alluvial'), ('clay', 'Clay'), ('desert', 'Desert')], max_length=30)),
                ('avgprice', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Crop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Vegetables', 'Vegetables'), ('Fruits', 'Fruits'), ('Pulses', 'Pulses'), ('grains', 'Grains'), ('fiber', 'Fiber')], max_length=30)),
                ('name', models.CharField(max_length=20)),
                ('area', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Insurance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField()),
                ('insuranceon', models.CharField(max_length=20)),
                ('desc', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Knowledge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('desc', models.CharField(max_length=100)),
                ('video', models.CharField(max_length=1500)),
            ],
        ),
        migrations.CreateModel(
            name='Loan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField()),
                ('IR', models.FloatField()),
                ('loanon', models.CharField(max_length=50)),
                ('desc', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('photo', models.ImageField(upload_to='')),
                ('phoneno', models.CharField(max_length=10)),
                ('state', models.CharField(choices=[('AP', 'Ap'), ('Assam', 'Assam'), ('Bihar', 'Bihar'), ('Goa', 'Goa'), ('Gujarat', 'Gujarat'), ('Harayana', 'Harayana'), ('Kerala', 'Kerala')], max_length=30)),
                ('soil', models.CharField(choices=[('Red', 'Red'), ('Black', 'Black'), ('Alluvial', 'Alluvial'), ('clay', 'Clay'), ('desert', 'Desert')], max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Subsidy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField()),
                ('loanon', models.CharField(max_length=50)),
                ('desc', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Training',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('desc', models.CharField(max_length=100)),
                ('video', models.CharField(max_length=1500)),
            ],
        ),
    ]
