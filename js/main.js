$(function() {

    var $aside   = $(".aside"),
        $posts   = $(".posts"),
        $window  = $(window),

        asideOffset = $aside.offset(),
        asideBottom = asideOffset.top + $aside.height(),

        postsOffset = $posts.offset(),
        postsBottom = postsOffset.top + $posts.height(),

        topMargin = 64;

    if($window.width() > 768){
        $window.scroll(function() {

            if ($window.scrollTop() > topMargin && postsBottom > (asideBottom + $window.scrollTop())) {

                $aside.stop().animate({
                    marginTop: $window.scrollTop()
                }, 0);

            } else if (postsBottom <= (asideBottom + $window.scrollTop())) {

                marginTop: asideOffset.top

            } else {

                $aside.stop().animate({
                    marginTop: topMargin
                }, 0);

            }
        });
    };
    
});