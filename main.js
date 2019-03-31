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

    $('#program-lang').hover(function(){
        $('#programming-language').animate({ opacity: '1', borderRadius: '50px'}, 100,
        function(){$('#tools-library, #softwares, #human-language').animate({ opacity: '0.5'});}
        );
    }, 
    function(){$('#programming-language, #tools-library, #softwares, #human-language').animate({ opacity: '1', borderRadius: '15px'});
} 
        );

 $('#tools-lib').hover(function(){
        $('#tools-library').animate({ opacity: '1', borderRadius: '50px'}, 100,
        function(){$('#programming-language, #softwares, #human-language').animate({ opacity: '0.5'});}
        );
    }, 
    function(){$('#programming-language, #tools-library, #softwares, #human-language').animate({ opacity: '1', borderRadius: '15px'});
} 
        );
        
$('#titlesoftwares').hover(function(){
        $('#softwares').animate({ opacity: '1', borderRadius: '50px'}, 100,
        function(){$('#programming-language, #tools-library, #human-language').animate({ opacity: '0.5'});}
        );
    }, 
    function(){$('#programming-language, #tools-library, #softwares, #human-language').animate({ opacity: '1', borderRadius: '15px'});
} 
        );          

$('#language').hover(function(){
        $('#human-language').animate({ opacity: '1', borderRadius: '50px'}, 100,
        function(){$('#programming-language, #tools-library, #softwares').animate({ opacity: '0.5'});}
        );
    }, 
    function(){$('#programming-language, #tools-library, #softwares, #human-language').animate({ opacity: '1', borderRadius: '15px'});
} 
        );   



    
});

// , function(){
//     $('softwares').hide(1000);
// }, function(){
//     $('human-language').hide(1000);
// } )

// function(){ $('#programming-language').animate({height: "0px"}, 1000);
//     }