const item = $(".item");
const vidBox = $(".video");
const picBox = $(".pic");

item.on("mouseenter", function(){
    $(this).find("svg").addClass("on");
})

item.on("mouseleave", function(){
    $("svg").removeClass("on");
});

vidBox.on("click", function(){
    const bg = $(this).find(".article_inner").css("background");
    const src = $(this).find("video").attr("src");
    const tit1 = $(this).find(".title h2").text();
    const tit2 = $(this).find(".title em").text();
    const sub1 = $(this).find(".category h1").text();
    const sub2 = $(this).find(".category p").text();

    $("body").append(
        $("<aside class='pop'>").append(
            $("<div class='inner'>").css({background: bg}).append(
                $("<video muted autoplay loop>").attr({src: src}),
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

picBox.on("click", function(){
    const src = $(this).find("img").attr("src");
    
    $("body").append(
        $("<aside class='pop2'>").append(
            $("<div class='inner'>").append(
                $("<img>").attr({src: src}),
                $("<div class='btns'>").append(
                    $("<span>").text("18").append(
                        ("<i class='fas fa-thumbs-up'>")
                    ),
                    $("<span>").append(
                        ("<i class='fas fa-share-alt'>")
                    )
                ),
                $("<div class='con'>").append(
                    $("<h1>").text("COMMENT STREAM"),
                    $("<article>").append(
                        $("<div>").append(
                            ("<img src='img/icon1.png'>"),
                            $("<h2>").text("SCARLETT").append(
                                $("<span>").text("JOHANSSON")
                            )
                        ),
                        $("<p>").text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quia accusamus veniam vitae reprehenderit eveniet illo saepe iure similique ex."),
                        $("<span>").text("Lorem ipsum dolor sit")
                    ),
                    $("<article>").append(
                        $("<div>").append(
                            ("<img src='img/icon2.png'>"),
                            $("<h2>").text("SCARLETT").append(
                                $("<span>").text("JOHANSSON")
                            )
                        ),
                        $("<p>").text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quia accusamus veniam vitae reprehenderit eveniet illo saepe iure similique ex."),
                        $("<span>").text("Lorem ipsum dolor sit")
                    ),
                    $("<textarea placeholder='Type your comment..'>"),
                    $("<input type='submit' value='SEND'>"),
                    $("<span class='reset'>")
                ),
                ("<span class='close'>")
            )
        )
    )
});

$("html, body").on("click", ".close", function(){
    $(".pop").remove();
});