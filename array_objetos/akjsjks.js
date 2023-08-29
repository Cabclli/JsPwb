
var cards = new Array(
 new Array("manzana", 1),
 new Array("manzana", 2),
 new Array("manzana", 3), 
 new Array("pera", 1),
 new Array("pera", 2),
 new Array("pera", 3),
 var cards = new Array(
    new Array("manzana.jpg", 1),
    new Array("manzana.jpg", 2),
    new Array("manzana.jpg", 3), 
    new Array("pera.jpg", 1),
    new Array("pera.jpg", 2),
    new Array("pera.jpg", 3),
    new Array("melon.jpg", 1),
    new Array("melon.jpg", 2),
    new Array("melon.jpg", 3)
   );
   
   
    function random_card(){
               if(cards.length > 0){
               var rand = Math.floor(Math.random()*cards.length);
               var html = "card: <img src='./img/"+cards[rand][0]+"' /><br/>points: "+cards[rand] [1]+"<br/><br/>";
               document.getElementById("myDiv").innerHTML += html;
               cards.splice(rand, 1);
               }
         }
   
