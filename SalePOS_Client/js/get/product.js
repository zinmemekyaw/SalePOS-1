$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8000/Product/"
    }).then(function(data) {
        console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        var tr = $('<tr/>');
        var id=data.results[i].id;

              $(tr).append("<td>" + data.results[i].product_name+"</td>");
              // $(tr).append("<td>" + data.results[i].description + "</td>");
              $(tr).append("<td>" + data.results[i].quantity+"</td>");
              $(tr).append("<td>" + data.results[i].product_price+"</td>");
              // $(tr).append("<td>" + data.results[i].supplier_price+"</td>");
              $(tr).append("<td>" + data.results[i].create_date+ "</td>");
              $(tr).append("<td><a href=product.html?"+data.results[i].id+" id='deleteProduct' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></td>");
              $(tr).append("<td><a href=update_product.html?"+data.results[i].id+" class='btn btn-primary'><span class='glyphicon glyphicon-edit'></span></a></td>");
              
              $('#product').append(tr);
          }
           $('#product_table').DataTable(); 
} );
  });

// (".deleteAddress").getElementsByClassName(click(function(){                       
//                        $.ajax({
//                         type    : 'DELETE',
//                         contentType : 'application/json; charset=utf-8',
//                         url     : url.partner+SearchString+"/",
//                         dataType:'json',
//                         success: function(data){
//                             alert("success! Partner Deleted");
//                             window.location.assign("Customer_list.html")
//                         }
//                     });
