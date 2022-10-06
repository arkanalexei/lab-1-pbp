$(document).ready(function(){
    $.get("{% url 'wishlist:show_json' %}", function(data) {
        $.each(data, function(i, value) {
            $(".jsonn").append("<tr><td>" + value.fields.nama_barang + "</td><td>" + value.fields.harga_barang + "</td><td>" + value.fields.deskripsi + "</td></tr>");
            
            }
        )
    })
  });