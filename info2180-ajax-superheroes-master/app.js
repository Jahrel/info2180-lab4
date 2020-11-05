
$( document ).ready(function() {

    console.log("hi");

    $("#srchbutton").click(function() {
        
        console.log("You clicked a link!");

        var xmhl = new XMLHttpRequest();

        xmhl.onreadystatechange = function (){
            if (xmhl.readyState == 4 && xmhl.status == 200){
                alert(xmhl.responseText);
            }

        };

        var url = "http://localhost:8080/superheroes.php";

        xmhl.open("GET",url,true);
        xmhl.send();
    
    });
   
   


});