slider('.slides-container .shift', '.slides img', 'active')

function slider(carouselSelector, slideSelector, activeClass) {
    $(carouselSelector).click(
        function(e) {
            // CURRENTLY ACTIVE ITEM
            var currentSlide = $(slideSelector + '.' + activeClass);

            if (e.target.id == "shift-left") {
                // IF LEFT ---> SELECT LEFT ITEM ; (IF !(LEFT ITEM) ---> RESTART FROM FIRST ITEM RIGHT)
                if (currentSlide.is($(slideSelector + ':first-of-type'))) {
                    var next = $(slideSelector + ':last-of-type');
                } else {
                    var next = currentSlide.prev();
                }
            } else {
                // IF RIGHT ---> SELECT RIGHT ITEM ; (IF !(RIGHT ITEM) ---> RESTART FROM FIRST ITEM LEFT)
                if (currentSlide.is($(slideSelector + ':last-of-type'))) {
                    var next = $(slideSelector + ':first-of-type');
                } else {
                    var next = currentSlide.next();
                }
            }
            // MAKE CURRENTLY ACTIVE ITEM INACTIVE
            currentSlide.removeClass(activeClass);
            // SHOW NEXT (OR PREVIOUS) ITEM
            next.addClass(activeClass);
        }
    )
}