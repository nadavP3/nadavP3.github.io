$(document).ready(function () {

    if ($.ua.os.name == 'iOS') {
        $('#contact-save-to-phone-link').remove();
    }

    $('#contact-biography-button').click(function () {
        $(this).hide();
        $('.contact-biography-block').show();
        var status = $('.contact-biography-block').attr('status');
        if (status == 'closed') {
            $('.contact-biography-block').css('width', $('.contact-biography-block').width() - 2);
            $('.contact-biography-block').attr('status', 'opened');
        }
    });

    $('#contact-address-button').click(function () {
        $(this).hide();
        $('.contact-address-block').show();
        var status = $('.contact-address-block').attr('status');
        if (status == 'closed') {
            $('.contact-address-block').css('width', $('.contact-address-block').width() - 2);
            $('.contact-address-block').attr('status', 'opened');
        }
    });

    $('.contact-address-block').click(function () {
        $(this).hide();
        $('#contact-address-button').show();
    });

    $('.contact-biography-block').click(function () {
        $(this).hide();
        $('#contact-biography-button').show();
    });

    var firstBlockElementsCount = $('.ui-controlgroup').first().children('a[data-role=button]').length;

    if (firstBlockElementsCount == 1) {
        var element = $('.ui-controlgroup').first().children('a[data-role=button]');

        if (element.attr('id') == 'contact-address-button') {
            element.next().css('border-bottom-left-radius', '3px');
            element.next().css('border-bottom-right-radius', '3px');
        }

        if (element.attr('id') == 'contact-biography-button') {
            element.next().css('border-top-left-radius', '3px');
            element.next().css('border-top-right-radius', '3px');
        }
    }
    setTimeout(function() {
        $('a').blur();
    },0); 
});