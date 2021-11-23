const item = $(".item");
const imgBox = $(".clickable");

item.on("mouseenter", function(){
    $(this).find("svg").addClass("on");
})

item.on("mouseleave", function(){
    $("svg").removeClass("on");
});

imgBox.on("click", function(){
    let bg = $(this).find(".article_inner").css("background");
    let imgSrc = $(this).find("img").attr("src");
    let tit1 = $(this).find(".title h1").text();
    let tit2 = $(this).find(".title em").text();
    let sub1 = $(this).find(".category h1").text();
    let sub2 = $(this).find(".category p").text();

    $("body").append(
        $("<div class='pop'>").append(
            $("<div class='inner'>").css({background: bg}).append(
                $("<img>").attr({src: imgSrc}),
                $("<div class='con'>").append(
                    $("<h1>").text(tit1),
                    $("<h2>").text(tit2),
                    $("<h3>").text(sub1),
                    $("<h4>").text(sub2),
                    $("<ul>").append(
                        $("<li>").append(
                            "<i class='fas fa-map-pin'>"
                        ),
                        $("<li>").append(
                            "<i class='fas fa-share-alt'>"
                        ),
                        $("<li>").append(
                            "<i class='fas fa-thumbs-up'>"
                        ),
                        $("<li>").append(
                            "<i class='fas fa-download'>"
                        ),
                        $("<li>").append(
                            "<i class='fas fa-share'>",
                            $("<span>").text("SUBSCRIBE TO UPDATES")
                        )
                    )
                ),
                $("<span class='close'>")
            )
        )
    );
});

$("html, body").on("click", ".close", function(){
    $(".pop").remove();
});