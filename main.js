$(document).ready(function() {



    $('a').on('click', function(event){
        if (this.hash !== ""){
            //prevent default anchor click behaviour
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top}, 2000, function(){
                window.location.hash = hash;
            });
        }
    });




    
});