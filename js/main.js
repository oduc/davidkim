window.onload = function() {
    scrolly();

    $('#topBtn').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        });

    });//top버튼 클릭

 }; 