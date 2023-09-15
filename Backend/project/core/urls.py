from django.urls import path
from .views import *

urlpatterns = [
    # Profile URLs
    path('profiles/', Profilelistcreate.as_view(), name='profile-list-create'),
    path('profiles/<int:pk>/', Profiledisplayupdatedelete.as_view(), name='profile-detail'),

    # Crop URLs
    path('crops/', Croplistcreate.as_view(), name='crop-list-create'),
    path('crops/<int:pk>/', Cropdisplayupdatedelete.as_view(), name='crop-detail'),

    # AMI URLs
    path('amis/', AMIlistcreate.as_view(), name='ami-list-create'),
    path('amis/<int:pk>/', AMIdisplayupdatedelete.as_view(), name='ami-detail'),

    # Loan URLs
    path('loans/', Loanlistcreate.as_view(), name='loan-list-create'),
    path('loans/<int:pk>/', Loandisplayupdatedelete.as_view(), name='loan-detail'),

    # Subsidy URLs
    path('subsidies/', Subsidylistcreate.as_view(), name='subsidy-list-create'),
    path('subsidies/<int:pk>/', Subsidydisplayupdatedelete.as_view(), name='subsidy-detail'),

    # Insurance URLs
    path('insurances/', Insurancelistcreate.as_view(), name='insurance-list-create'),
    path('insurances/<int:pk>/', Insurancedisplayupdatedelete.as_view(), name='insurance-detail'),

    # Knowledge URLs
    path('knowledge/', Knowledgelistcreate.as_view(), name='knowledge-list-create'),
    path('knowledge/<int:pk>/', Knowledgedisplayupdatedelete.as_view(), name='knowledge-detail'),

    # Training URLs
    path('training/', Traininglistcreate.as_view(), name='training-list-create'),
    path('training/<int:pk>/', Trainingdisplayupdatedelete.as_view(), name='training-detail'),
]
