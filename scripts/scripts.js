$(document).ready(function() {
    $('#gallery a').lightBox({
      fixedNavigation: true,
      imageLoading:  'lightbox/images/lightbox-ico-loading.gif',
      imageBtnPrev:  'lightbox/images/lightbox-btn-prev.gif',
      imageBtnNext:  'lightbox/images/lightbox-btn-next.gif',
      imageBtnClose: 'lightbox/images/lightbox-btn-close.gif',
      imageBlank:    'lightbox/images/lightbox-blank.gif',
    });


    /* Do the Ajax call only if a calendar is present */
    if ($('#calendar').length) {
        $.getJSON("https://www.googleapis.com/calendar/v3/calendars/wernsbach@googlemail.com/events",
            {
                "orderBy": "startTime",
                "singleEvents": true,
                "maxResults": 10,
                /* Go back for 3 days (offset must be in milliseconds) */
                "timeMin": (new Date(new Date() - 259200000)).toISOString(),
                "key": "AIzaSyDKbV0BvbbinaNG00ZYRWp435f9oo4dO8w"
            },
            function(data) {
                var date_to_string = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
                var items = [];

                $.each(data.items, function(key, value) {
                    if (value.start.hasOwnProperty('date')) {
                        var d = new Date(value.start.date);
                        var print_time = false;

                    }

                    if (value.start.hasOwnProperty("dateTime")) {
                        var d = new Date(value.start.dateTime);
                        var print_time = true;
                    }

                    var month = d.getMonth() + 1;
                    if (month < 10) {
                        month = "0" + month;
                    }

                    date_string = date_to_string[d.getDay()] + " " + d.getDate() + "." + month;

                    if (print_time) {
                        var minutes = d.getMinutes();
                        if (minutes < 10) {
                            minutes = "0" + minutes;
                        }

                        date_string += " " + d.getHours() + ":"+ minutes;
                    }

                    items.push('<li>' + date_string + "</br>" + value.summary + '</li>');

                });
                $('#calendar>ul').html(items.join(''));
        });
    }

});
