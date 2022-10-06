from django import forms
from wishlist.models import BarangWishlist

class BarangWishlistForm(forms.ModelForm):
    class Meta:
        model = BarangWishlist
        fields=['nama_barang','harga_barang','deskripsi']