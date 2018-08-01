$(function(){
    $('.h-menu img').on('click', function(){
        $('.overlay').addClass('actived');
        return false;
    });

    $('.nav-close img').on('click', function(){
        $('.overlay').removeClass('actived');
        return false;
    })