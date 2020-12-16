var counter = 0;

$(".button").click(function() {
    counter = counter + 1;
    $(".counter").text("This quiz was taken " + counter + " times");
    var rate = parseInt($(".rate").val());
    var preference = $(".preference").val();
    
    
    if (rate <=5 && preference === "brownie") {
         $(".results").text("You are a Sugar-free brownie!");
    $(".results").append("<img src ='https://saltedplains.com/wp-content/uploads/2018/11/sweet-potato-brownies-6.jpg' class='imageSize'>");
        
    } else if (rate <=10 && preference ==="brownie")
    {  $(".results").text("You are a Fudge Bronwie!");
     $(".results").append("<img src ='https://www.recipegirl.com/wp-content/uploads/2012/04/Chocolate-Fudge-Glazed-Brownies.jpg' class='imageSize2'>"); }
    
    else if (rate <=5 && preference ==="cupcake")
    {  $(".results").text("You are a Cozmic Brownie!");
     $(".results").append("<img src ='https://www.handletheheat.com/wp-content/uploads/2014/08/Cosmic-Brownies-SQUARE.jpg' class='imageSize3'>"); }
    
     else if (rate <=10 && preference ==="cupcake")
    {  $(".results").text("You are a Salted Caramel Brownie!");
     $(".results").append("<img src ='https://dinnerthendessert.com/wp-content/uploads/2018/11/Salted-Caramel-Brownies-688x1032.jpg' class='imageSize4'>"); }
    
   
    
});

