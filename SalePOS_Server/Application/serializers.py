from django.contrib.auth.models import User
from rest_framework import serializers
from Application.models import Brand,Customer,Supplier, Group, Tags, Type, Sales, SaleDetails, Register,Product

class BrandSerializer(serializers.ModelSerializer):
	product_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Brand
		fields = ('id', 'brand_name', 'description', 'product_id')
class TagsSerializer(serializers.HyperlinkedModelSerializer):
	product_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Tags
		fields = ('id', 'tags_name', 'product_id')
class TypeSerializer(serializers.ModelSerializer):
	product_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Type
		fields = ('id', 'type_name', 'product_id')

class ProductSerializer(serializers.ModelSerializer):
	#product_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Product
		fields = ('id', 'product_name', 'type_id','description', 'quantity', 'brand_id', 'tag_id', 'supplier_id', 'product_price', 'supplier_price', 'create_date')

class SupplierSerializer(serializers.ModelSerializer):
	product_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Supplier
		fields = ('id', 'supplier_name','product_id', 'description','company', 'phone', 'mobile', 'fax', 'email','date_of_birth', 'gender','road', 'street', 'suburb','city','post_code','state','country','website')
class CustomerSerializer(serializers.ModelSerializer):
	sales_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Customer
		fields = ('id', 'customer_name','sales_id', 'group_id','description','company', 'phone', 'mobile', 'fax', 'email','date_of_birth', 'gender','road', 'street', 'suburb','city','post_code','state','country')
class GroupSerializer(serializers.ModelSerializer):
	customer_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model=Group
		fields = ('id', 'group_name', 'no_customer', 'country', 'customer_id')

#ko kyaw
class SaleDetailsSerializer(serializers.ModelSerializer):
	#owner = serializers.ReadOnlyField(source='owner.username')
	#highlight = serializers.HyperlinkedIdentityField(view_name='saledetails-highlight', format='html')
	class Meta:
		model = SaleDetails
		#fields = ('url', 'id', 'highlight', 'owner', 'sales_id', 'product_id', 'quantity', 'product_price', 'sub_total')
		fields = ('id', 'sales_id', 'product_id', 'quantity', 'sub_total')

# Sale Serializer
class SalesSerializer(serializers.ModelSerializer):
	#owner = serializers.ReadOnlyField(source='owner.username')
	#highlight = serializers.HyperlinkedIdentityField(view_name='sales-highlight', format='html')
	#saledetails = SaleDetailsSerializer(many=True, read_only=True)
	#saledetails_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	saledetails_id = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	class Meta:
		model = Sales
		#fields = ('id', 'customer_id', 'transaction_date', 'amount_paid', 'paid', 'register_id', 'saledetails_id')
		fields = ('id', 'transaction_date', 'subtotal', 'tax', 'discount', 'items', 'amount_paid', 'paid', 'repay', 'customer_id', 'register_id', 'saledetails_id')


class RegisterSerializer(serializers.ModelSerializer):
	sales_id = SalesSerializer(many=True, read_only=True)
	#owner = serializers.ReadOnlyField(source='owner.username')
	#highlight = serializers.HyperlinkedIdentityField(view_name='register-highlight', format='html')
	class Meta:
		model = Register
		#fields = ('url', 'id', 'highlight', 'owner', 'status', 'opening_balance', 'note', 'expected', 'counted', 'difference', 'sales_id', 'cash_payment_received', 'store_credit', 'total', 'closing_note')
		#fields = ('id', 'status','transaction_date', 'opening_balance', 'note', 'expected', 'counted', 'difference','cash_payment_received', 'store_credit', 'total', 'closing_note','sales_id')
		fields = ('id', 'status', 'opening_balance', 'opening_note', 'opening_time', 'closing_time', 'expected', 'counted', 'difference', 'cash_payment_received', 'store_credit', 'total', 'closing_note', 'sales_id')

# class TrackSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Track
#         fields = ['order', 'title', 'duration']

# class AlbumSerializer(serializers.ModelSerializer):
#     tracks = TrackSerializer(many=True, read_only=True)

#     class Meta:
#         model = Album
#         fields = ['album_name', 'artist', 'tracks']