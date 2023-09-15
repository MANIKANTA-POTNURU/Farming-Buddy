from django.db import models

class State(models.TextChoices):
    AP = 'AP'
    Assam = 'Assam'
    Bihar = 'Bihar'
    Goa = 'Goa'
    Gujarat = 'Gujarat'
    Harayana = 'Harayana'
    Kerala = 'Kerala'

class Soil(models.TextChoices):
    Red = 'Red'
    Black = 'Black'
    Alluvial = 'Alluvial'
    clay = 'clay'
    desert = 'desert'

class Type(models.TextChoices):
    Vegetables = 'Vegetables'
    Fruits = 'Fruits'
    Pulses = 'Pulses'
    grains = 'grains'
    fiber = 'fiber'

class Profile(models.Model):
    name = models.CharField(max_length=50)
    photo = models.ImageField() #blank=False,upload_to="images"
    phoneno = models.CharField(max_length=10)
    state = models.CharField(max_length=30, choices=State.choices)
    soil = models.CharField(max_length=30, choices=Soil.choices)

class Crop(models.Model):
    type = models.CharField(max_length=30, choices=Type.choices)
    name = models.CharField(max_length=20)
    area = models.IntegerField()

class AMI(models.Model):
    type = models.CharField(max_length=30, choices=Type.choices)
    name = models.CharField(max_length=20)
    soil = models.CharField(max_length=30, choices=Soil.choices)
    avgprice = models.FloatField()

class Loan(models.Model):
    amount = models.FloatField()
    IR = models.FloatField()
    loanon = models.CharField(max_length=50)
    desc = models.CharField(max_length=100)

class Subsidy(models.Model):
    amount = models.FloatField()
    loanon = models.CharField(max_length=50)
    desc = models.CharField(max_length=100)

class Insurance(models.Model):
    amount = models.FloatField()
    insuranceon = models.CharField(max_length=20)
    desc = models.CharField(max_length=100)

class Knowledge(models.Model):
    name = models.CharField(max_length=20)
    desc = models.CharField(max_length=100)
    video = models.CharField(max_length=1500)

class Training(models.Model):
    name = models.CharField(max_length=20)
    desc = models.CharField(max_length=100)
    video = models.CharField(max_length=1500)