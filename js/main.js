// loading awal
window.addEventListener('load', function () {
    $(".preloader").fadeOut();
});

const myModalInvitation = new bootstrap.Modal('#invitationModal');
if (window.screen.width <= 960) {
    myModalInvitation.show();
}

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.btn-volume').css({ 'left': '-50px' });
    } else {
        $('.btn-volume').css({ 'left': '20px' });
    }
});

function invitationAudio() {
    var el = document.getElementById("myAudio");
    if (el.paused == true) {
        el.play();
        $('.btn-volume').html('<i class="fa-solid fa-volume-high"></i>');
    } else {
        el.pause();
        $('.btn-volume').html('<i class="fa-solid fa-volume-xmark"></i>');
    }
}

// gallery
jQuery("#animated-thumbnails-gallery").justifiedGallery({
    captions: false,
    lastRow: "hide",
    rowHeight: 180,
    margins: 5
}).on("jg.complete", function () {
    window.lightGallery(
        document.getElementById("animated-thumbnails-gallery"), {
        autoplayFirstVideo: false,
        pager: false,
        controls: false,
        zoom: false,
        download: false,
        rotate: false,
        showCloseIcon: true,
        galleryId: "nature",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
            controls: false,
            showCloseIcon: true,
            download: false,
            rotate: false
        }
    }
    );
});

// aos
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
}
aos_init();

$(document).on('click', '.number-spinner button', function () {
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});

function konfirmRsvp(rsvp) {
    if (rsvp == "y") {
        $(".spinner-label").removeClass("form-hide");
        $(".number-spinner").removeClass("form-hide");
        $('#person').val(1);
    } else {
        $(".number-spinner").addClass("form-hide");
        $(".spinner-label").addClass("form-hide");
        $('#person').val(0);
    }
}

function rsvpYes() {
    html = '<h1 class="mb-4">RSVP</h1>' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<h4 class="mb-3">Akan menghadiri</h4>' +
        '<p>Yey, terima kasih atas kehadirannya...<br>Sampai jumpa ;)</p>' +
        '</div>' +
        '</div>';
    $('#appRsvp').html(html);
}

function rsvpNo() {
    html = '<h1 class="mb-4">RSVP</h1>' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<h4 class="mb-3">Berhalangan hadir</h4>' +
        '<p>Tidak apa-apa, tapi jangan lupa untuk berdoa pada aku ya...<br>sampai jumpa di lain kesempatan ;)</p>' +
        '</div>' +
        '</div>';
    $('#appRsvp').html(html);
}

function weddingGift(typeGift) {
    var showGift = "";
    if (typeGift == "gift") {
        showGift = '<p class="mb-3"><strong>ALAMAT PENERIMA</strong></p>' +
            '<p class="mb-3">Nama Lengkap<br>085123456789</p>' +
            '<p class="mb-3">Jl. Magelang – Yogyakarta KM.6,5,<br>Kutu Tegal, Sinduadi,<br>Kec. Mlati, Kab. Sleman,<br>Daerah Istimewa Yogyakarta 55284</p>' +
            '<button class="btn btn-light btn-sm align-self-center " type="button" onclick="copyText(' + "'Jl. Magelang – Yogyakarta KM.6,5, Kutu Tegal, Sinduadi, Kec. Mlati, Kab. Sleman, Daerah Istimewa Yogyakarta 55284'" + ')"><i class="fas fa-copy"></i> Copy Alamat</button>';
    } else if (typeGift == "wallet1") {
        showGift = '<p class="mb-3"><strong>BANK BCA (014)</strong></p>' +
            '<p class="mb-3">Account Number : <strong>012345678913</strong></p>' +
            '<button class="btn btn-light btn-sm mb-3" type="button" onclick="copyText(' + "'012345678913'" + ')"><i class="fas fa-copy"></i> Copy Number</button>' +
            '<p>a/n Nama Mempelai</p>';
    }
    document.getElementById('showGift').innerHTML = showGift;
}

function animation(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = ""
    }, 700);
}

function Countdown() {

    setInterval(function () {

        var hari = document.getElementById("days");
        var jam = document.getElementById("hours");
        var menit = document.getElementById("minutes");
        var detik = document.getElementById("seconds");

        var deadline = new Date("Dec 10, 2022 18:30:00");
        var waktu = new Date();
        var distance = deadline - waktu;

        if (waktu >= deadline) {
            hari.innerHTML = '00';
            jam.innerHTML = '00';
            menit.innerHTML = '00';
            detik.innerHTML = '00';
        } else {
            var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days < 10) {
                days = '0' + days;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            hari.innerHTML = days;
            jam.innerHTML = hours;
            menit.innerHTML = minutes;
            detik.innerHTML = seconds;
            //animation
            animation(detik);
            if (seconds == 0) animation(menit);
            if (minutes == 0) animation(jam);
            if (hours == 0) animation(hari);
        }
    }, 1000);
}
// Countdown();