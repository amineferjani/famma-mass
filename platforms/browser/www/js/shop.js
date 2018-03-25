function init1(idb){
var nb=0;	
var content='';
       var url = "http://192.168.43.127/projects/app1/shop.php?idb=B002";
        $.getJSON(url, function(result) {
            console.log(result);

            $.each(result, function(i, field) {
nb=nb+1;
                var img = field.Url_image;
                var des = field.Designation;
                var price = field.prix;
                var etat = field.etat;

		content=content.concat('<div class="column"><img src="',img,'" style="max-width: 45%;"><br>'+des+'<br>'+price+' DT </div>');		

  

            });
	
			//alert(content);
			document.getElementById("liste").innerHTML =content;
        });
}