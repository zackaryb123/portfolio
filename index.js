// function onNavButton() {
//     $('.nav').on('click','button', function (event) {
//         const target = $(event.currentTarget).parent().parent().children()[1].id;
//         switch (target) {
//             case 'Projects':
//                 if($('#Projects').hasClass('active')) {
//                     $('#Projects').removeClass('active')
//                     $('#Projects').attr('hidden', true);
//                 }
//                 else {
//                     $('#Projects').addClass('active')
//                     $('#Projects').attr('hidden', false);
//                 }
//                 break;
//             case 'Skills':
//                 if($('#Skills').hasClass('active')) {
//                     $('#Skills').removeClass('active')
//                     $('#Skills').attr('hidden', true);
//                 }
//                 else {
//                     $('#Skills').addClass('active')
//                     $('#Skills').attr('hidden', false);
//                 }
//                 break;
//             case 'Tech':
//                 if($('#Tech').hasClass('active')) {
//                     $('#Tech').removeClass('active')
//                     $('#Tech').attr('hidden', true);
//                 }
//                 else {
//                     $('#Tech').addClass('active')
//                     $('#Tech').attr('hidden', false);
//                 }
//                 break;
//         }
//     });
// }

function onDisplayPage() {
    $('.nav').on('click', 'li', function(event) {
      const currentPage = $('main').find('section:visible');
      const target = $(event.currentTarget).children().attr('href');
      if($(target).hasClass('active')) {
        return;
      }else{
        $(currentPage).removeClass('active');
        $(currentPage).attr('hidden', true);
        $(target).addClass('active');
        $(target).attr('hidden', false);
      }
    })
}

function onCollapseNavBar() {
    $('.fa-list-btn').on('click', function(event) {
        console.log(event.currentTarget);
        const collapseBtn = $(event.currentTarget);
        const collapseNav = $('#navbar-collapse');
        const isExpanded = $(event.currentTarget).attr('aria-expanded');

        console.log(isExpanded);

        if(isExpanded === "true") {
            $(collapseBtn).attr('aria-expanded', false);
            $(collapseNav).css('display', 'none');
        }
        if(isExpanded === "false") {
            $(collapseBtn).attr('aria-expanded', true);
            $(collapseNav).css('display', 'block');
        }
    });
}

function onHoverBubbleTxt() {
    $('.bubble').hover(
      function(event) {
        const tooltip = $(event.currentTarget).find('.tooltip');
        tooltip.attr('hidden', false);
        const arrow = $(event.currentTarget).find('.arrow-down');
        arrow.attr('hidden', false);
        const txt  = $(event.currentTarget).find('.bubble-txt');
        txt.attr('hidden', true);
    }, function(event){
        const tooltip = $(event.currentTarget).find('.tooltip');
        tooltip.attr('hidden', true);
        const arrow = $(event.currentTarget).find('.arrow-down');
        arrow.attr('hidden', true);
        const txt  = $(event.currentTarget).find('.bubble-txt');
        txt.attr('hidden', false);
      }
    )
}

$(onDisplayPage);
$(onCollapseNavBar);
$(onHoverBubbleTxt);