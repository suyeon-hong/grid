const item = $(".item");
const img = item.find("img");


img.on("mouseenter", function(){
    $(this).closest(".article_inner").append(
        $("<img src='img/cursor.png' class='cursor'>")
    )
})

img.on("mousemove", function(e){
    let boxX = $(this).offset().left;
    let boxY = $(this).offset().top;

    let posX = (e.pageX - boxX) - 25;
    let posY = (e.pageY - boxY) - 25;
    
    $("body").find(".cursor").css({
        top: posY,
        left: posX,
    });
});

item.on("mouseleave", function(){
    $(item).find(".cursor").remove();
});