function affiche(){
var nb=0;	
var content='';
       var url = "http://192.168.43.241/projects/app1/annonces.php";
        $.getJSON(url, function(result) {
            console.log(result);

            $.each(result, function(i, field) {
nb=nb+1;
                var img = field.urlimage;
                var des = field.titre;
                var price = field.prix;
                var etat = field.description;

		content=content.concat('<div class="column"><img src="',img,'" style="max-width: 45%;"><br>'+des+'<br>'+price+' DT </div>');		

  

            });
	
			//alert(content);
			document.getElementById("liste").innerHTML =content;
        });
}
