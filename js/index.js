let x =$(".menu").outerWidth()

$(".menu").css({left: `-${x}px`})


let num=document.querySelector(".number")



$(".exit").on("click",function(){
    $(".menu").animate({left:`-${x}px`}) 
    
    
})
$(".select").on("click",function(){
    $(".menu").animate({left:"0px"},1000)
    $(".select").animate({left:`${x}px`},1000)

})
$("textarea").on("input" ,function(){
    let max=100
    let len=$(this).val().length;
    let newLeng=max-(len)   
    $(".number").text(newLeng);
    
})

$(".singer-1").on("click", function(){
    $(".details").slideToggle(1000)
    console.log("ss");
    
})

$(".singer-2").on("click",function(){
    $(".details-2").slideToggle(1000)
})
$(".singer-3").on("click",function(){
    $(".details-3").slideToggle(1000)
})
$(".singer-4").on("click",function(){
    $(".details-4").slideToggle(1000)
})

countDownToTime("30 october 2024 10:00:00");
function countDownToTime(countTo){
    
    let future=new Date(countTo)
    future= future.getTime()/1000

    let noww =new Date()
    noww=noww.getTime()/1000

    
    Dif=(future-noww)

    let days = Math.floor( Dif / (24*60*60));
   let hours = Math.floor((Dif - (days * (24*60*60))) / 3600);
   let mins = Math.floor((Dif - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((Dif - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownToTime(countTo); }, 1000);
}

$(".see").on("click",function(){
    let s=$(this).attr("href")
    let x=$(s).offset().top
    $("html , body").animate({scrollTop:x},100)
    
    
})