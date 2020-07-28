import  $ from 'jquery'
import "../index.scss"

$( ".menuToggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
    $( ".menu" ).slideToggle();
});

