function onDisplayPage() {
    $('.nav').on('click', 'li', function(event) {
      const pageHeader = $('.page-header');
          // Wait for page swap
          $.when( pageSwap(event) )
            .done( function( d ) {
              resetHeader(pageHeader);
            })
            .fail( function( err ) {
              console.log( err, 'page swap failed.' );
            })
            // Wait for reset
            .then( function() {
              $.when( resetHeader(pageHeader) )
                .done( function( d ) {
                  annimateHeader(pageHeader);
                } )
                .fail( function( err ) {
                  console.log( err, 'Reset failed.' );
                })
            });
        });
}

function pageSwap(event) {
  const currentPage = $('main').find('section:visible');
  const target = $(event.currentTarget).children().attr('href');
  if($(target).hasClass('active')) {
    return;
  }else{
    // Switch Page
    $(currentPage).removeClass('active');
    $(currentPage).attr('hidden', true);
    $(target).addClass('active');
    $(target).attr('hidden', false);
  }
}

function resetHeader(pageHeader) {
  pageHeader.promise().done(function() {
    const pageHeader = $('.page-header');
    pageHeader.css('transition', '0s');
    pageHeader.css('transform', 'translate(0px, 1rem)');
  });
}

function annimateHeader(pageHeader) {
  pageHeader.promise().done(function () {
    const pageHeader = $('.page-header');
    pageHeader.css('transition', '1s ease-in-out' );
    pageHeader.css('transform', 'translate(0px, -5.5rem)');
  });
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

function handleFunction(){
  onDisplayPage();
  onCollapseNavBar();
}

$(handleFunction);