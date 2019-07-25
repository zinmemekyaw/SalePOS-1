from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import permissions, renderers, viewsets
from rest_framework.response import Response

from Application.models import Brand,Customer,Supplier,  Group, Tags, Type, Sales, SaleDetails, Register, Product
from Application.serializers import BrandSerializer,CustomerSerializer,SupplierSerializer, GroupSerializer, TagsSerializer, TypeSerializer, SalesSerializer, SaleDetailsSerializer, RegisterSerializer,ProductSerializer #, UserSerializer
from Application.permissions import IsOwnerOrReadOnly

class BrandViewSet(viewsets.ModelViewSet):
	queryset = Brand.objects.all()
	serializer_class = BrandSerializer

class CustomerViewSet(viewsets.ModelViewSet):
	queryset = Customer.objects.all()
	serializer_class = CustomerSerializer

class SupplierViewSet(viewsets.ModelViewSet):
	queryset = Supplier.objects.all()
	serializer_class = SupplierSerializer
	
class ProductViewSet(viewsets.ModelViewSet):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	
class GroupViewSet(viewsets.ModelViewSet):
	queryset = Group.objects.all()
	serializer_class = GroupSerializer

class TagsViewSet(viewsets.ModelViewSet):
	queryset = Tags.objects.all()
	serializer_class = TagsSerializer
	

class TypeViewSet(viewsets.ModelViewSet):
	queryset = Type.objects.all()
	serializer_class = TypeSerializer
	

# Sale Views
class SalesViewSet(viewsets.ModelViewSet):
	queryset = Sales.objects.all()
	serializer_class = SalesSerializer
	
class SaleDetailsViewSet(viewsets.ModelViewSet):
	queryset = SaleDetails.objects.all()
	serializer_class = SaleDetailsSerializer
	
class RegisterViewSet(viewsets.ModelViewSet):
	queryset = Register.objects.all()
	serializer_class = RegisterSerializer
