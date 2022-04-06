$(document).ready(function () {
    $('#open-menu').click(function () {
        $('#myLinks').slideToggle();
    });
});
var $link = $(".link");
var $box = $("#box");
var $link2 = $(".link2");
var $box2 = $("#box2");
var $link3 = $(".link3");
var $box3 = $("#box3");
// $link.mouseenter(function() {
// //   clearTimeout($box.data('timeoutId'));
//   $box.show(200);
// }).mouseleave(function() {
//   var timeoutId = setTimeout(function() {
//     $box.hide(200);
//   }, 650);
// //   $box.data('timeoutId', timeoutId);
// });

// $box.mouseenter(function() {
//   clearTimeout($box.data('timeoutId'));
// }).mouseleave(function() {
//   var timeoutId = setTimeout(function() {
//     $box.hide(200);
//   }, 650);
// //   $box.data('timeoutId', timeoutId);
// });

$link.mouseenter(function () {
    $box.show();
}).mouseleave(function() {
    $box.hide();
})
$link2.mouseenter(function () {
    $box2.show();
}).mouseleave(function() {
    $box2.hide();
})
$link3.mouseenter(function () {
    $box3.show();
}).mouseleave(function() {
    $box3.hide();
})
