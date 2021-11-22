const item = $(".item");

item.on("mouseenter", function(){
    $(this).find("svg").addClass("on");
})

item.on("mouseleave", function(){
    $("svg").removeClass("on");
});