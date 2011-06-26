$(document).ready(function() {
    /* Hide all 2nd menu at after loading */
    $("#menu .menu li ul").hide();
    /* Hover for the 2nd menu level */
    $("#menu .menu li").hover(
        function() { $(this).find("ul").show(); },
        function() { $(this).find("ul").hide(); }
    );

    $('#gallery a').lightBox({
      fixedNavigation: true,
      imageLoading:  'lightbox/images/lightbox-ico-loading.gif',
      imageBtnPrev:  'lightbox/images/lightbox-btn-prev.gif',
      imageBtnNext:  'lightbox/images/lightbox-btn-next.gif',
      imageBtnClose: 'lightbox/images/lightbox-btn-close.gif',
      imageBlank:    'lightbox/images/lightbox-blank.gif',
    });

});
