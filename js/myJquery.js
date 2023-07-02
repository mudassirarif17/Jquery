$(document).ready(function () {
    console.log("we are in the new file now")

    // Your jQuery Code here 
    // console.log($);
    // Syntax for Jquery
    // $('selector').action()

    // $('p').click();

    // This is an example of element selector
    $('p').click(function () {
        // console.log("You clicked on P" , this);
        // $('p').hide();
        //$(this).hide();
    });

    // Example of doubled click on p
    $('p').dblclick(function () {
        // console.log("You Doubled clicked on P" , this);
        // $('p').hide();
        //$(this).hide();
    });

    // Example of Entered Mouse on p
    $('p').mouseenter(function () {
        // console.log("Mouse Entered on P" , this);
        // $('p').hide();
        //$(this).hide();
    });

    // Example of Hover  on p
    $('p').hover(function () {
        // console.log("You hovered on P" , this);
        // $('p').hide();
        //$(this).hide();
    },
    function(){
        // console.log("Thanks for coming");
    }
    );

    // There are three main types of Selector in Jquery
    // 1. element selector
    // 2. Id selector
    // 3. Class Selector 

    // this is an example of id selector
    // $("#second").hide();
    // $("#second").click();

    // This is an example of class selector 
    // $('.odd').hide();
    // $('.odd').click();

    // Other selectors 
    // $('*').click();     //Click on all the elements 
    // $('p.odd').click();  //click only on those paragraph which have a class odd
    // $('p:first').click();


    // Events in Jquery
    // MouseEvent = Click , dblClick , mouseenter , mouseleave
    // KeyboardEvents = keypress , keydown , MediakeyStatusMap
    // form events = submit , change , focous , blur
    // Window/Document = load , resize , scroll 

    // Demoing the On Method
//     $('p').on(
//         {
//         click:function(){
//         console.log("Thanks for coming " , this );
//     },
//     mouseleave:function(){
//         console.log("Mouse leaved");
//     }
// })

// Example of hiden function
// $('#wiki').hide(1000 , function () {
//     console.log("Hiden");
// })

// Example of show function
// $('#wiki').show(1000 , function () {
//     console.log("Showed");
// })

$('#but').click(function(){
    $('#wiki').toggle(1000);
})

// Quick Quiz 
// FadeIn
// FadeOut
// FadeToggle
// FadeTo

// Example of slide function
// $('#wiki').slideUp(1000, function(){
//     console.log("Done");
// });

// $('#wiki').slideDown(1500);
// $('#wiki').slideToggle(1500);

// Example of animate function
// $('#wiki').animate({
//     opacity : 0.3,
//     height : "150px" ,
//     width : "350px"
// }, 2000)

// $('#wiki').animate({
//     opacity : 0.3,
//     height : "150px" ,
//     width : "350px"
// }, "fast")

// $('#wiki').animate({opacity:0.2}, 4000)
// $('#wiki').animate({height:"300px"}, 1000)

// Example of text function
// $('#wiki').text("This is Mudassir");

// $('#inp').val();
// $('#inp').val("Hello world");

// $('#inp').html("Hello world");
// $('#inp').html();

// $('#wiki').empty();
// $('#wiki').remove();

$('#wiki').addClass('myClass');
$('#wiki').addClass('myClass2');
$('#wiki').removeClass('myClass2');

// Css property
$('#wiki').css('background-color' , 'red');
$('#wiki').css('color' , 'white');

// Ajax
// $.get('https://code.jquery.com/jquery-3.7.0.js',function(data , status){
//     // alert(data);
//     alert(status);
// })

$.post('https://code.jquery.com/jquery-3.7.0.js',function(data , status){
    // alert(data);
    alert(status);
})
})


