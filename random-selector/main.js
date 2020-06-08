/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pictures[randomChildNumber]);
    });
});