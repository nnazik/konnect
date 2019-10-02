var count = 0;
var screenWidth = $(window).width();
var screenHeight = $(window).height();

var companiesandpeople = [{
        title: 'Company 01',
        description: '{City},  {Country}',
        image: 'img/logo-ex-7.png',
    },
    {
        title: 'Company 02',
        description: '{City},  {Country}',
        image: 'img/logo-ex-7.png',
    },
    {
        title: 'Name Elliot Fu',
        description: '<b>{Headline}</b>',
        image: 'img/elliot.jpg',
    },
    {
        title: 'Name Matt Giampietro',
        description: '<b>{Headline}</b>',
        image: 'img/matt.jpg',
    }
];

var companies = [{
        title: 'Company 01',
        description: '{City},  {Country}',
        image: 'img/logo-ex-7.png',
    },
    {
        title: 'Company 02',
        description: '{City},  {Country}',
        image: 'img/logo-ex-7.png',
    },
    {
        title: 'Company 03',
        description: '{City},  {Country}',
        image: 'img/logo-ex-7.png',
    },
    {
        title: 'Company 04',
        description: '{City},  {Country}',
        image: 'img/logo-ex-7.png',
    }
];

var people = [{
        title: 'Name Daniel Louise',
        description: '<b>{Headline}</b>',
        image: 'img/daniel.jpg',
    },
    {
        title: 'Name Helen Troy',
        description: '<b>{Headline}</b>',
        image: 'img/helen.jpg',
    },
    {
        title: 'Name Elliot Fu',
        description: '<b>{Headline}</b>',
        image: 'img/elliot.jpg',
    },
    {
        title: 'Name Matt Giampietro',
        description: '<b>{Headline}</b>',
        image: 'img/matt.jpg',
    }
];

// ----------Timeline
var items = new vis.DataSet({
    type: {
        start: 'ISODate',
        end: 'ISODate'
    }
});

var groups = new vis.DataSet([{
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    }
]);

// note that months are zero-based in the JavaScript Date object, so month 3 is April
var items = new vis.DataSet([{
        id: 'A',
        content: 'Bump In:<br>{05:00} - {09:30}',
        start: '2019-10-02T05:00:00',
        end: '2019-10-02T09:30:00',
        type: 'background',
        className: 'bumpIn'
    },
    {
        id: 'B',
        content: 'Bump Out:<br>{18:00} - {23:00}',
        start: '2019-10-02T18:00:00',
        end: '2019-10-02T23:00:00',
        type: 'background',
        className: 'bumpOut'
    },
    {
        id: 'C',
        content: 'Event:<br>{10:00} - {18:00}',
        start: '2019-10-02T10:00:00',
        end: '2019-10-02T18:00:00',
        type: 'background',
        className: 'eventTimes'
    },
    {
        id: 'D',
        content: 'Bump In:<br>{08:00} - {18:00}',
        start: '2019-10-03T08:00:00',
        end: '2019-10-03T18:00:00',
        type: 'background',
        className: 'bumpIn'
    },
    {
        id: 'E',
        content: 'Bump Out:<br>{02:00} - {10:00}',
        start: '2019-10-04T02:00:00',
        end: '2019-10-04T10:00:00',
        type: 'background',
        className: 'bumpOut'
    },
    {
        id: 'F',
        content: 'Event:<br>{16:00} - {04:00}',
        start: '2019-10-03T16:00:00',
        end: '2019-10-04T04:00:00',
        type: 'background',
        className: 'eventTimes'
    },
    {
        id: 'G',
        content: 'Bump In:<br>{05:00} - {09:30}',
        start: '2019-10-04T05:00:00',
        end: '2019-10-04T09:30:00',
        type: 'background',
        className: 'bumpIn'
    },
    {
        id: 'H',
        content: 'Bump Out:<br>{18:00} - {22:00}',
        start: '2019-10-04T18:00:00',
        end: '2019-10-04T22:00:00',
        type: 'background',
        className: 'bumpOut'
    },
    {
        id: 'I',
        content: 'Event:<br>{10:00} - {18:00}',
        start: '2019-10-04T10:00:00',
        end: '2019-10-04T18:00:00',
        type: 'background',
        className: 'eventTimes'
    },
    {
        id: 1,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T05:00:00',
        end: '2019-10-02T08:00:00',
        group: 1
    },
    {
        id: 2,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-02T10:00:00',
        end: '2019-10-02T16:00:00',
        group: 1
    },
    {
        id: 3,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T18:00:00',
        end: '2019-10-02T20:00:00',
        group: 1
    },
    {
        id: 4,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-03T10:00:00',
        end: '2019-10-03T16:00:00',
        group: 1
    },
    {
        id: 5,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-03T18:00:00',
        end: '2019-10-04T04:00:00',
        group: 1
    },
    {
        id: 6,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T04:00:00',
        end: '2019-10-04T10:00:00',
        group: 1
    },
    {
        id: 7,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T07:00:00',
        end: '2019-10-02T09:00:00',
        group: 2
    },
    {
        id: 8,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-02T12:00:00',
        end: '2019-10-02T18:00:00',
        group: 2
    },
    {
        id: 9,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T19:00:00',
        end: '2019-10-02T22:00:00',
        group: 2
    },
    {
        id: 10,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-03T10:00:00',
        end: '2019-10-03T14:00:00',
        group: 2
    },
    {
        id: 11,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-03T20:00:00',
        end: '2019-10-04T02:00:00',
        group: 2
    },
    {
        id: 12,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T02:00:00',
        end: '2019-10-04T03:00:00',
        group: 2
    },
    {
        id: 13,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T06:30:00',
        end: '2019-10-02T08:30:00',
        group: 3
    },
    {
        id: 14,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-02T10:00:00',
        end: '2019-10-02T16:00:00',
        group: 3
    },
    {
        id: 15,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T18:00:00',
        end: '2019-10-02T20:00:00',
        group: 3
    },
    {
        id: 16,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T06:00:00',
        end: '2019-10-02T08:30:00',
        group: 4
    },
    {
        id: 17,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-02T10:00:00',
        end: '2019-10-02T18:00:00',
        group: 4
    },
    {
        id: 18,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T18:00:00',
        end: '2019-10-02T21:00:00',
        group: 4
    },
    {
        id: 19,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T07:00:00',
        end: '2019-10-02T08:30:00',
        group: 5
    },
    {
        id: 20,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-02T12:00:00',
        end: '2019-10-02T18:00:00',
        group: 5
    },
    {
        id: 21,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-02T20:00:00',
        end: '2019-10-02T21:00:00',
        group: 5
    },
    {
        id: 22,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-03T08:00:00',
        end: '2019-10-03T12:30:00',
        group: 5
    },
    {
        id: 23,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-03T16:00:00',
        end: '2019-10-04T02:00:00',
        group: 5
    },
    {
        id: 24,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T03:00:00',
        end: '2019-10-04T10:00:00',
        group: 5
    },
    {
        id: 25,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T06:00:00',
        end: '2019-10-04T08:00:00',
        group: 2
    },
    {
        id: 26,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-04T10:00:00',
        end: '2019-10-04T16:00:00',
        group: 2
    },
    {
        id: 27,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T18:00:00',
        end: '2019-10-04T20:00:00',
        group: 2
    },
    {
        id: 28,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T07:00:00',
        end: '2019-10-04T09:00:00',
        group: 4
    },
    {
        id: 29,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-04T12:00:00',
        end: '2019-10-04T18:00:00',
        group: 4
    },
    {
        id: 30,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T19:00:00',
        end: '2019-10-04T22:00:00',
        group: 4
    },
    {
        id: 31,
        content: 'BI',
        title: '<b>{Service Name} Bump In</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T07:00:00',
        end: '2019-10-04T08:30:00',
        group: 3
    },
    {
        id: 32,
        content: '{Service Name}',
        title: '<b>{Service Name}</b><p>{Company Name}<br>{StartTime} - {EndTime}</p><b>{PrimaryContactName}</b><p>{PrimaryContactMobile}<span class="hyphen"> - </span>{PrimaryContactEmail}</p><small>{SupplierWebsite}</small>',
        start: '2019-10-04T12:00:00',
        end: '2019-10-04T18:00:00',
        group: 3
    },
    {
        id: 33,
        content: 'BO',
        title: '<b>{Service Name} Bump Out</b><br>{StartTime} - {EndTime}',
        start: '2019-10-04T20:00:00',
        end: '2019-10-04T21:00:00',
        group: 3
    },
]);

function scrollCalendar() {
    $('.day.event').each(function() {
        var target = $(this).attr('data-scroll');
        var scrollPos = $('#' + target).position().top;
        $(this).click(function() {
            $('.activeEventsContainer').animate({
                scrollTop: scrollPos
            }, 750);
        });
    });
}

function triggerCreateTimeline() {

    if (screenWidth < 768) {

        setTimeout(function() {
            var container = document.getElementById('timelineContainer');
            var options = {
                width: '100%',
                zoomable: false,
                stack: false,
                align: 'left',
                start: '2019-10-02T00:00:00',
                end: '2019-10-02T10:00:00',
                min: '2019-10-02T00:00:00',
                max: '2019-10-04T24:00:00',
                margin: {
                    item: {
                        vertical: 15
                    },
                    axis: 260
                },
                timeAxis: {
                    scale: 'hour',
                    step: 1
                },
                orientation: {
                    axis: 'both',
                    item: 'top'
                },
                format: {
                    minorLabels: {
                        hour: 'HH',
                    }
                },
            };
            var timeline = new vis.Timeline(container);
            timeline.setOptions(options);
            timeline.setGroups(groups);
            timeline.setItems(items);
            $('.vis-panel.vis-left').remove();

            // Arrows
            function move(percentage) {
                var range = timeline.getWindow();
                var interval = range.end - range.start;
                timeline.setWindow({
                    start: range.start.valueOf() - interval * percentage,
                    end: range.end.valueOf() - interval * percentage
                });
            }
            document.getElementById('moveLeft').onclick = function() {
                move(1);
            };
            document.getElementById('moveRight').onclick = function() {
                move(-1);
            };
        }, 500);

    } else {

        setTimeout(function() {
            var container = document.getElementById('timelineContainer');
            var options = {
                width: '100%',
                zoomable: false,
                stack: false,
                align: 'left',
                start: '2019-10-02T00:00:00',
                end: '2019-10-03T02:00:00',
                min: '2019-10-02T00:00:00',
                max: '2019-10-04T24:00:00',
                margin: {
                    item: {
                        vertical: 15
                    },
                    axis: 260
                },
                timeAxis: {
                    scale: 'hour',
                    step: 1
                },
                orientation: {
                    axis: 'both',
                    item: 'top'
                },
                format: {
                    minorLabels: {
                        hour: 'HH',
                    }
                },
            };
            var timeline = new vis.Timeline(container);
            timeline.setOptions(options);
            timeline.setGroups(groups);
            timeline.setItems(items);
            $('.vis-panel.vis-left').remove();

            // ----------Arrows
            function move(percentage) {
                var range = timeline.getWindow();
                var interval = range.end - range.start;
                timeline.setWindow({
                    start: range.start.valueOf() - interval * percentage,
                    end: range.end.valueOf() - interval * percentage
                });
            }
            document.getElementById('moveLeft').onclick = function() {
                move(.923);
            };
            document.getElementById('moveRight').onclick = function() {
                move(-.923);
            };
        }, 500);
    }
}

$(document).ready(function() {

    // ----------Load comun HTML
    $('footer').load('footer.html');
    $('.actionBar').load('header.html');
    $('.modals').load('modals.html');

    // ----------Tab Navigation
    $('.ui.menu .item').tab({
        history: true,
        historyType: 'hash',
    });

    // ----------Semantic functionalities
    $('.popupNotes').popup();
    $('.resourcesNotes').popup();

    // $('.menu .item').tab();

    $('.ui.dropdown').dropdown();
    $('select.dropdown').dropdown();
    $('.validateDropdown').dropdown({
        onChange: function() {
            $(this).parent().find('.itemHidden').css('display', 'block');
        }
    });

    $('.datePicker').calendar({
        type: 'date',
        formatter: {
            date: function(date, settings) {
                if (!date) return '';
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return month + '/' + day + '/' + year;
            }
        }
    });
    $('#button_calendar').calendar({
        type: 'month'
    });
    $('.startTime, .endTime').calendar({
        type: 'time'
    });
    // $('.startTime').calendar({
    //     type: 'time',
    //     endCalendar: $('.endTime')
    // });
    // $('.endTime').calendar({
    //     type: 'time',
    //     startCalendar: $('.startTime')
    // });

    $('.parentAccordion').accordion();

    $('.ui.checkbox').checkbox();

    $('.hasModal').click(function() {
        var dataModal = $(this).attr('data-modal');
        $('.ui.modal.' + dataModal + '').modal({
            transition: 'fade up',
        }).modal('show');
    });

    // ----------Fixed menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 130) {
            $('.fixedMenu').addClass('active');
        } else {
            $('.fixedMenu').removeClass('active');
        }
    });

    // ----------Remove uploaded document from modal
    $('.removeDocument').click(function() {
        $(this).parent().fadeOut('fast');
    });

    // ----------Validate login form
    function SubmitForm(fields) {
        var valid = $('.ui.loginForm').form('is valid');
        window.location.href = "dashboard.html";
    }
    $('.ui.loginForm').form({
        fields: {
            email: {
                identifier: 'email',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter your e-mail'
                    },
                    {
                        type: 'email',
                        prompt: 'Please enter a valid e-mail'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter your password'
                    },
                    {
                        type: 'length[6]',
                        prompt: 'Your password must be at least 6 characters'
                    }
                ]
            }
        },
        onSuccess: function(event, fields) {
            SubmitForm(fields);
            event.preventDefault();
        }
    });

    // ----------Search people and companies
    $('.ui.searchCompanyAndPeople').search({
        source: companiesandpeople,
        searchFields: [
            'title'
        ],
        fullTextSearch: false
    });

    $('.ui.searchCompany').search({
        source: companies,
        searchFields: [
            'title'
        ],
        fullTextSearch: false
    });

    $('.ui.searchPeople').search({
        source: people,
        searchFields: [
            'title'
        ],
        fullTextSearch: false
    });

    // Show edit button
    $('.venueTemplate .item').click(function() {
        if ($(this).attr('data-tab') == 'venue') {
            $('.infoBar .triggerEditableOptions').css('display', 'inline-block');
        } else {
            $('.infoBar .triggerEditableOptions').css('display', 'none');
        }
    });
    $('.serviceProviderTemplate .item').click(function() {
        if ($(this).attr('data-tab') == 'services') {
            $('.infoBar .triggerEditableOptions').css('display', 'inline-block');
        } else {
            $('.infoBar .triggerEditableOptions').css('display', 'none');
        }
    });
    $('.exhibitorTemplate .item').click(function() {
        if ($(this).attr('data-tab') == 'exhibitors') {
            $('.infoBar .triggerEditableOptions').css('display', 'inline-block');
        } else {
            $('.infoBar .triggerEditableOptions').css('display', 'none');
        }
    });

    // ----------Fixed menu to top
    $('.fixedMenu .item').click(function() {
        $('html, body').animate({
            scrollTop: $('.html, body').offset().top
        }, 500);
    });

    // ----------Made the template editable
    $('.triggerEditableOptions').one('click', function() {
        $('.field.editable').removeClass('disabled');
        $('.dropdown.editable').removeClass('disabled');
        $('.calendar.editable input').removeAttr('disabled');
        $('.editableObject').fadeIn();
        $('.editableObjectHidden').css('opacity', '1').removeClass('inactive');
        $('html, body').animate({
            scrollTop: $('.html, body').offset().top
        }, 500);
        $('.triggerEditableOptions').remove();
        $('.saveActions').css('display', 'inline-block');
        $('body').addClass('unsaveData');
        $('.mainMenu a, .subMenu a, .sidebarContent ul a').click(function(event) {
            var thisLink = $(this).attr('href');
            console.log(thisLink);
            event.preventDefault();
            if ($('body').hasClass('unsaveData')) {
                $('.ui.modal.leavePage').modal({
                    transition: 'fade up',
                }).modal('show');
            }
            $('.leavePage .positive').click(function() {
                window.location = thisLink;
            });
        });
    });

    $('.hasSubMenu span').click(function(e) {
        e.preventDefault();
        $(this).parent().find('.subMenu').stop().slideToggle();
    });

    $('.notifications i').click(function() {
        $(this).parent().fadeOut();
    });

    $('.showProfileMenu').click(function(e) {
        e.preventDefault();
        $('.profileMenu').stop().slideToggle();
    });

    $('.removeContact').click(function() {
        $(this).fadeOut();
    });

    $('.activateViewTab').click(function() {
        $('#aManageServices.active').removeClass('active');
        $('#aViewServices').addClass('active');
        $('#tabManageServices.active').removeClass('active');
        $('#tabViewServices').addClass('active');
        $('.justAdded').transition('glow');
    });

    $('.activateViewTabExhibitor').click(function() {
        $('#aManageExhibitors.active').removeClass('active');
        $('#aViewExhibitors').addClass('active');
        $('#tabManageExhibitors.active').removeClass('active');
        $('#tabViewExhibitors').addClass('active');
        $('.justAdded').transition('glow');
    });

    $('.activateEditTabExhibitor').click(function() {
        $('#aViewExhibitors.active').removeClass('active');
        $('#aManageExhibitors').addClass('active');
        $('#tabViewExhibitors.active').removeClass('active');
        $('#tabManageExhibitors').addClass('active');
        $('.addExhibitorMainInfo').hide();
        $('.addExhibitorForm').show();
    });

    $('#aManageExhibitors').click(function() {
        $('.addExhibitorMainInfo').show();
        $('.addExhibitorForm').hide();
    });

    // ----------Add new HTML
    $('.addNewVenue').click(function() {
        $('.parentAccordionVenue .title').removeClass('active');
        $('.parentAccordionVenue .content').removeClass('active');
        $('.parentAccordionVenue').append('<div class="title active"><div class="ui grid"><div class="twelve wide column middle aligned"><i class="dropdown icon"></i>Venue {Number}</div><div class="four wide column middle aligned right aligned"></div></div></div><div class="content active"><form class="ui form"><div class="ui grid stackable"><div class="seven wide column"><div class="companyContainer marginB20"><div class="ui dividing header"><h3>Venue Company <i class="globe icon"></i></h3></div><div class="kcpCardContainer"></div><div class="ui grid center aligned"><div class="sixteen wide column"><div class="ui button basic blue fluid addClient hasModal" data-modal="client"><i class="plus circle icon"></i>Add Venue</div></div></div></div><div class="contactsContainer"><div class="ui dividing header"><h3>Venue Contacts <i class="globe icon"></i></h3></div><div class="kipCardContainer"></div><div class="ui grid stackable center aligned"><div class="sixteen wide column"><div class="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts"><i class="plus circle icon"></i>Add Contact </div></div></div></div></div><div class="nine wide column"><div class="field"><div class="timeWindowsContainer"><div class="ui dividing header"><h3>Venue Time Windows <i class="globe icon"></i></h3></div><div class="ui styled accordion"><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Pre Event Access</span></div></div></div><div class="content"><div class="transition visible"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Pre Event Access date </div></div></div></div></div></div><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Event Time</span></div></div></div><div class="content"><div class="transition hidden"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Event Time date </div></div></div></div></div></div><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Post Event Access</span></div></div></div><div class="content"><div class="transition"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Post Event Access date </div></div></div></div></div></div></div></div></div><div class="ui dividing header"><h3>Venue Requirements <i class="cog icon"></i><i class="sitemap icon"></i><i class="map marker alternate icon"></i></h3></div><div class="field"><div class="textarea" contenteditable=""></div></div></div><div class="sixteen wide column saveButtons paddingT0"><div class="ui divider"></div><div class="ui grid stackable"><div class="sixteen wide column right aligned"><div class="ui button hasModal" data-modal="inviteModal">Save & Invite</div></div></div></div></div></form></div>');
        $('html, body').animate({
            scrollTop: $('#venuesAnchor').offset().top
        }, 750);
    });

    $('.addNewService').click(function() {
        $('.parentAccordionService .title').removeClass('active');
        $('.parentAccordionService .content').removeClass('active');
        $('.parentAccordionService').append('<div class="title active"><div class="ui grid"><div class="twelve wide column middle aligned"><i class="dropdown icon"></i>Service {Number}</div><div class="four wide column middle aligned right aligned"></div></div></div><div class="content active"><form class="ui form"><div class="ui grid stackable"><div class="seven wide column"><div class="companyContainer marginB20"><div class="ui dividing header"><h3>Service Name <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="field"><input type="text" name="" placeholder="Name"></div><div class="ui dividing header"><h3>Supplier Company <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="kcpCardContainer"></div><div class="ui grid center aligned"><div class="sixteen wide column"><div class="ui button basic blue fluid addClient hasModal" data-modal="client"><i class="plus circle icon"></i>Add Supplier</div></div></div></div><div class="contactsContainer"><div class="ui dividing header"><h3>Supplier Contacts <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="kipCardContainer"></div><div class="ui grid stackable center aligned"><div class="sixteen wide column"><div class="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts"><i class="plus circle icon"></i>Add Contact </div></div></div></div></div><div class="nine wide column"><div class="ui dividing header"><h3>Service Requirements <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="field"><div class="textarea" contenteditable=""></div></div><div class="timeWindowsContainer"><div class="ui dividing header"><h3>Time Windows <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="ui styled accordion"><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Bump In</span></div></div></div><div class="content"><div class="field"><div class="ui checkbox"><input type="checkbox" tabindex="0" class="hidden"><label>Same as venue</label></div></div><div class="transition visible"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add bump-in date </div></div></div></div></div></div><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Event Time</span></div></div></div><div class="content"><div class="field"><div class="ui checkbox"><input type="checkbox" tabindex="0" class="hidden"><label>Same as venue</label></div></div><div class="transition hidden"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Event Time date </div></div></div></div></div></div><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Bump Out</span></div></div></div><div class="content"><div class="field"><div class="ui checkbox"><input type="checkbox" tabindex="0" class="hidden"><label>Same as venue</label></div></div><div class="transition"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Bump Out date </div></div></div></div></div></div></div></div></div><div class="sixteen wide column saveButtons paddingT0"><div class="ui divider"></div><div class="ui grid stackable"><div class="ten wide column middle aligned"></div><div class="six wide column right aligned"><div class="ui button hasModal halfWidth" data-modal="inviteModal">Save & Invite</div></div></div></div></div></form></div>');
        $('html, body').animate({
            scrollTop: $('#servicesAnchor').offset().top
        }, 750);
    });

    $('.addNewExhibitor').click(function() {
        $('.parentAccordionExhibitor .title').removeClass('active');
        $('.parentAccordionExhibitor .content').removeClass('active');
        $('.parentAccordionExhibitor').append('<div class="title active"><div class="ui grid"><div class="twelve wide column middle aligned"><i class="dropdown icon"></i>Exhibitor {Number}</div><div class="four wide column middle aligned right aligned"></div></div></div><div class="content active"><form class="ui form"><div class="ui grid stackable"><div class="seven wide column"><div class="companyContainer marginB20"><div class="ui dividing header"><h3>Exhibitor Company <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="kcpCardContainer"></div><div class="ui grid center aligned"><div class="sixteen wide column"><div class="ui button basic blue fluid addClient hasModal" data-modal="client"><i class="plus circle icon"></i>Add Exhibitor</div></div></div></div><div class="contactsContainer"><div class="ui dividing header"><h3>Exhibitor Contacts <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="kipCardContainer"></div><div class="ui grid stackable center aligned"><div class="sixteen wide column"><div class="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts"><i class="plus circle icon"></i>Add Contact </div></div></div></div></div><div class="nine wide column"><div class="ui dividing header"><h3>Stand Number <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="field"><input type="text" name="" placeholder="Stand Number"></div><div class="ui dividing header"><h3>Notes to Specific Exhibitor <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="field"><div class="textarea" contenteditable=""></div></div><div class="timeWindowsContainer"><div class="ui dividing header"><h3>Exhibitor Specific Time windows <i class="cog icon"></i><i class="sitemap icon"></i><i class="building icon"></i></h3></div><div class="ui styled accordion"><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Bump In</span></div></div></div><div class="content"><div class="field"><div class="ui checkbox"><input type="checkbox" tabindex="0" class="hidden"><label>Same as exhibition</label></div></div><div class="transition visible"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add bump-in date </div></div></div></div></div></div><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Event Time</span></div></div></div><div class="content"><div class="field"><div class="ui checkbox"><input type="checkbox" tabindex="0" class="hidden"><label>Same as exhibition</label></div></div><div class="transition hidden"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Event Time date </div></div></div></div></div></div><div class="title"><div class="ui grid stackable"><div class="sixteen wide column"><i class="dropdown icon"></i><span class="titleMinWidth">Bump Out</span></div></div></div><div class="content"><div class="field"><div class="ui checkbox"><input type="checkbox" tabindex="0" class="hidden"><label>Same as exhibition</label></div></div><div class="transition"><div class="item"><div class="ui three column grid"><div class="column"><span>Date</span><div class="ui calendar datePicker"><div class="ui input left icon"><i class="calendar icon"></i><input type="text" placeholder="Date"></div></div></div><div class="column"><span>Start</span><div class="ui calendar startTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="Start"></div></div></div><div class="column"><span>End</span><div class="ui calendar endTime"><div class="ui input left icon"><i class="time icon"></i><input type="text" placeholder="End"></div></div></div></div><div class="ui grid"><div class="sixteen wide column"><span>Notes</span><div class="textarea notes" contenteditable=""></div><div class="ui circular compact mini basic button"><i class="plus circle icon"></i>Add Bump Out date </div></div></div></div></div></div></div></div></div><div class="sixteen wide column saveButtons paddingT0"><div class="ui divider"></div><div class="ui grid stackable"><div class="ten wide column middle aligned"></div><div class="six wide column right aligned"><div class="ui button hasModal halfWidth" data-modal="inviteModal">Save & Invite</div></div></div></div></div></form></div>');
        $('html, body').animate({
            scrollTop: $('#exhibitorsAnchor').offset().top
        }, 750);
    });

    // ----------Create Timeline visualization
    $('.createTimeline').click(function() {
        count++;
        if (count == 1) {
            triggerCreateTimeline();
        } else {}
    });

    // ----------Mobile JS
    if (screenWidth < 768) {

        $('.day').click(function() {
            $('html, body').animate({
                scrollTop: $('#toScheduledEvents').offset().top
            }, 1000);
        });

    } else {}

});

// ----------Loader
$(window).load(function() {
    $('.pageLoader').fadeOut();
})
