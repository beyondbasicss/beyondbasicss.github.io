$(function() {

    var $aside   = $(".aside"),
        $posts   = $(".posts"),
        $window  = $(window),

        asideOffset = $aside.offset(),
        asideBottom = asideOffset.top + $aside.height(),

        postsOffset = $posts.offset(),
        postsBottom = postsOffset.top + $posts.height(),

        topPadding = 15;

    if($window.width() > 768){
        $window.scroll(function() {
            if ($window.scrollTop() > asideOffset.top && postsBottom > (asideBottom + $window.scrollTop())) {
                $aside.stop().animate({
                    marginTop: $window.scrollTop() - asideOffset.top + topPadding
                }, 0);
            } else if (postsBottom <= (asideBottom + $window.scrollTop())) {
                marginTop: asideOffset.top + topPadding,
                console.log(asideOffset.top + topPadding);
            } else {
                $aside.stop().animate({
                    marginTop: 0
                }, 0);
            }
        });
    };
    
});