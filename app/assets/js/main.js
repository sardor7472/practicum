$(document).ready(function() {

    const windowWidth = {

        mobileWindow: function() {
            if ($(window).outerWidth() > 576) {
                return false
            }
            return true
        },

        desktopWidth: function() {
            if ($(window).outerWidth() > 768) {
                return true
            }
            return false
        }
    }

    $('.prac-slider').slick({
        vertical: windowWidth.mobileWindow() ? false : true,
        arrows: false,
        verticalSwiping: windowWidth.mobileWindow() ? false : true,
        dots: true,
        dotsClass: 'main-slider-dots'
    });


    $('.humbr').click(function() {
        $('.header-bottom').toggleClass('open');

    });

    /* wayu  */
    var video = $('#video-teg')[0];
    var videoBatton = $('#video-batton');
    var playing = false;
    try {
        var videoOffset = $('#video-teg').offset().top;
    } catch (e) {

    }
    $('.video-right-teg').on('click', function() {
        if (playing) {
            video.pause();
            playing = false;
            videoBatton.css('opacity', 1);
        } else {
            video.play();
            playing = true
            videoBatton.css('opacity', 0);
        }
    })









});
const humbr = document.querySelector('.humbr');
humbr.addEventListener('click', (event) => {
    humbr.classList.toggle('open');
    // console.log(humbr);
});



// modal window open function
$('#praktikum-modal').on('click', function() {
    $.sweetModal({
        classes: ['modal-feedback'],
        content: `<h2 class="modal-feedback-title">Kontakt-formular </h2>
            <P class="modal-feedback-desc">Bitte füllen Sie dieses Formular aus, damit wir mit Ihnen
                Kontakt aufnehmen können</P>
        <form action="">
                <div class="modal-feedback-form-group">
                    <label for="firstname">Unternehmen</label>
                    <input type="text" name="firstname">
                </div>
                <div class="modal-feedback-form-group">
                    <label for="name">Name *</label>
                    <input type="text" name="name">
                </div>
                <div class="modal-feedback-form-group">
                    <label for="email">E-Mail *</label>
                    <input type="email" name="email">
                </div>
                <div class="modal-feedback-form-group">
                    <label for="tel">Telefon *</label>
                    <input type="number" name="tel">
                </div>
                <div class="modal-feedback-form-group">
                    <label for="comment">Text</label>
                    <textarea name="comment"></textarea>
                </div>
                <div class="modal-feedback-batton">
                    <button class="btn-hexagon" type="submit">absenden

                    </button>
                </div>
            </form>
`,

    });
});