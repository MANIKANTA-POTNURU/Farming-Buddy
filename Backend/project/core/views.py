from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import *


class Profilelistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Profiledisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class Croplistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Cropdisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class AMIlistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = AMI.objects.all()
    serializer_class = AMISerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class AMIdisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = AMI.objects.all()
    serializer_class = AMISerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class Loanlistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Loandisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class Subsidylistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Subsidy.objects.all()
    serializer_class = SubsidySerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Subsidydisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Subsidy.objects.all()
    serializer_class = SubsidySerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class Insurancelistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Insurancedisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class Knowledgelistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Knowledge.objects.all()
    serializer_class = KnowledgeSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Knowledgedisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Knowledge.objects.all()
    serializer_class = KnowledgeSerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)


class Traininglistcreate(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class Trainingdisplayupdatedelete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

    def get(self, request, **kwargs):
        return self.retrieve(request, **kwargs)

    def put(self, request, **kwargs):
        return self.update(request, **kwargs)

    def delete(self, request, **kwargs):
        return self.destroy(request, **kwargs)
