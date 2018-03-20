function onNavButton() {
    $('.nav').on('click','button', function (event) {
        const target = $(event.currentTarget).parent().parent().children()[1].id;
        switch (target) {
            case 'Projects':
                if($('#Projects').hasClass('active')) {
                    $('#Projects').removeClass('active')
                    $('#Projects').attr('hidden', true);
                }
                else {
                    $('#Projects').addClass('active')
                    $('#Projects').attr('hidden', false);
                }
                break;
            case 'Skills':
                if($('#Skills').hasClass('active')) {
                    $('#Skills').removeClass('active')
                    $('#Skills').attr('hidden', true);
                }
                else {
                    $('#Skills').addClass('active')
                    $('#Skills').attr('hidden', false);
                }
                break;
            case 'Tech':
                if($('#Tech').hasClass('active')) {
                    $('#Tech').removeClass('active')
                    $('#Tech').attr('hidden', true);
                }
                else {
                    $('#Tech').addClass('active')
                    $('#Tech').attr('hidden', false);
                }
                break;
        }
    });
}

function onDisplayProjects() {
    $('#Projects').on('click', 'a', function(event) {
        const currentPage = $('main').find('section:visible');
        const target = $(event.currentTarget).attr('href');
        if($(target).hasClass('active')) {
            return;
        }else{
            $(currentPage).removeClass('active');
            $(currentPage).attr('hidden', true);
            $(target).addClass('active');
            $(target).attr('hidden', false);
        }
    });
}

function onDisplayAbout() {
    $('.headshot-column').on('click', 'a', () => {
        const currentPage = $('main').find('section:visible');
        const target = $(event.currentTarget).children().attr('href');
        if($(target).hasClass('active')) {
            return;
        }else {
            $(currentPage).removeClass('active');
            $(currentPage).attr('hidden', true);
            $(target).addClass('active');
            $(target).attr('hidden', false);
        }
    });
}

$(onDisplayAbout)
$(onDisplayProjects);
$(onNavButton);