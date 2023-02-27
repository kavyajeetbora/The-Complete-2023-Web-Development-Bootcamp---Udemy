
// To change the css of an element:
// $("h1").css("color", "red");

// It is always better to keep the styling in separate in css file and change the class in js: 

$('h1').addClass('big-title border');
console.log($('h1').attr('class'));

// updating the text of a button
$('button').text('Click');

// Note: Here $(html_selector) will select all the elements not just one 

// Updating the  inner html of an element
$('button').html('<em>CLICK</em>')

// Manupulate attributes using jQuery
console.log($('a').attr('href')); // console log the attribute
$('a').attr('href', 'https://www.yahoo.com'); // Set the attribute

// Adding event listeners 
$('h1').click(function () {
    $('h1').css("color", "red");
});

$('button').click(function(){
    $('h1').css('color', 'purple');
});

$('input').keydown(function(event){
    $('h1').text(event.key);
});

$('h1').on('mouseover', function(){
    $('h1').css("color", "green");
});


// Adding and removing html elements using jQuery

// There are four methods to add: before(), after(), prepend(), append()
// before() adds html elements before the queried html element
$('h1').before('<button>Before</button>')

// after() method adds the elements after the queried html element:
$('h1').after('<button>After</button>')

// Prepent methods adds the html elements inside the queried element but before all the contents
$('h1').prepend('<button>Prepend</button>')
// Similary with append but after the contents inside the queried tag
$('h1').append('<button>Append</button>')

// To remove html elements
$('p').remove();

// Animation using jQuery
$('button').click(function(){
    $('h1').slideToggle();
});

// Animation using jQuery
$('button').click(function(){
    $('h1').animate({opacity:0.50});
});

// Chain animation
$('button').click(function(){
    $('h1').slideUp().slideDown().animate({opacity:0.50});
});