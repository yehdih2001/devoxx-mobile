define(['log'], function( log ) {

    var logger = log.getLogger('ui');

    logger.info("Loading ui.js");

    var ui =  { };

    ui.resetFlashMessages = function(page) {
        var header = $(page).children(":jqmData(role='message')");
        if (header) {
            var flashMessage = header.children("div#flashMessage");
            if (flashMessage) {
                flashMessage.remove();
            }
            var flashErrorMessage = header.children("div#flashErrorMessage");
            if (flashErrorMessage) {
                flashErrorMessage.remove();
            }
         }
    };

    ui.showFlashMessage = function(options) {
        if (options.page) {
            var flashMessage = _.template($('#flash' + (options.type === 'error' ? '-error' : '') + '-message-tpl').html(), { message: options.message ? options.message : "Chargement des données en cours ..." } );
            var currentPageHeader = $(options.page).children(":jqmData(role='message')");
            currentPageHeader.append(flashMessage);
        }
    };

    ui.hideFlashMessage = function(options) {
        if (options.page) {
            var header = $(options.page).children(":jqmData(role='message')");
            var flashMessage = header.children("div#flash" + (options.type === 'error' ? 'Error' : '') + "Message");
            flashMessage.fadeOut();
        }
    };

    ui.updateSplashscreenMessage = function(message) {
        $("#splash-message").text(message);
    };

    // summary:
    //            Adjust the title of the current view
    //
    // title: String
    //            The title to update the view with
    ui.switchTitle = function( page, title ) {
        var header = $('#' + page).children(":jqmData(role='header')");
        if (header) {
            header.children( 'h1' ).text( title || "" );
        }
    };

    logger.info("Loaded ui");


    return ui;
});
