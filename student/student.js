$('.view-b').click(function(){
    $('.book-search').hide();
    $('.book-order').hide();
    $('.book-info').hide();
    $('.book-ret').hide();
    $('.book-view').toggle();
});
$('.search-b').click(function(){
    $('.book-view').hide();
    $('.book-order').hide();
    $('.book-info').hide();
    $('.book-ret').hide();
    $('.book-search').show();
});
$('.ord-b').click(function(){
    $('.book-view').hide();
    $('.book-search').hide();
    $('.book-info').hide();
    $('.book-ret').hide();
    $('.book-order').show();
});
$('.ret-b').click(function(){
    $('.book-view').hide();
    $('.book-search').hide();
    $('.book-order').hide();
    $('.book-info').hide();
    $('.book-ret').show();
});
$('.info-b').click(function(){
    $('.book-view').hide();
    $('.book-search').hide();
    $('.book-order').hide();
    $('.book-ret').hide();
    $('.book-info').show();
});