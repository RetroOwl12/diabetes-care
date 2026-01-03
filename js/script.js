// ==============================
// DIABETES CARE - MAIN SCRIPT
// ==============================

$(document).ready(function () {

    console.log('✅ jQuery loaded successfully!');
    console.log('✅ Script.js is running!');

    // ==============================
    // HAMBURGER MENU TOGGLE
    // ==============================
    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('🍔 Hamburger clicked!');
        
        // Toggle icon bars <-> xmark
        $(this).find('i').toggleClass('fa-bars fa-xmark');
        
        // Toggle navbar active
        $('.navbar').toggleClass('active');
        
        console.log('📱 Navbar active:', $('.navbar').hasClass('active'));
    });

    // ==============================
    // CLOSE MENU SAAT KLIK LINK
    // ==============================
    $('.navbar ul li a').on('click', function () {
        console.log('🔗 Link clicked, closing menu...');
        
        $('.navbar').removeClass('active');
        $('.menu-btn').find('i').removeClass('fa-xmark').addClass('fa-bars');
    });

    // ==============================
    // HEADER STICKY SAAT SCROLL
    // ==============================
    $(window).on('scroll load', function () {
        
        // Skip jika di halaman artikel
        if ($('body').hasClass('artikel-page')) {
            $('header').removeClass('header-active');
            return;
        }

        // Header jadi sticky saat scroll > 30px
        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
    });

    // ==============================
    // CLOSE MENU SAAT KLIK DI LUAR
    // ==============================
    $(document).on('click', function (event) {
        // Cek apakah klik di luar navbar & menu button
        if (!$(event.target).closest('.navbar, .menu-btn').length) {
            $('.navbar').removeClass('active');
            $('.menu-btn').find('i').removeClass('fa-xmark').addClass('fa-bars');
        }
    });

    // ==============================
    // SMOOTH SCROLL UNTUK ANCHOR
    // ==============================
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.attr('href'));
        
        if (target.length) {
            e.preventDefault();
            
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // ==============================
    // FORM CONTACT HANDLER
    // ==============================
    $('.contact .form-container').on('submit', function (e) {
        e.preventDefault();
        
        var name = $(this).find('input[name="name"]').val();
        var email = $(this).find('input[name="email"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var message = $(this).find('textarea[name="message"]').val();
        
        console.log('📧 Form submitted:', { name, email, phone, message });
        
        if (name && email && phone && message) {
            alert('✅ Terima kasih, ' + name + '!\n\nPesan Anda telah diterima.\nKami akan segera menghubungi Anda di ' + email);
            this.reset();
        } else {
            alert('⚠️ Mohon isi semua field yang diperlukan.');
        }
    });

    // ==============================
    // DEBUG INFO
    // ==============================
    console.log('🎯 Menu button found:', $('.menu-btn').length);
    console.log('🎯 Navbar found:', $('.navbar').length);
    console.log('🎯 Window width:', $(window).width());
    
});

// ==============================
// VANILLA JS BACKUP
// (Jika jQuery gagal load)
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    if (!window.jQuery) {
        console.warn('⚠️ jQuery not loaded! Using vanilla JS backup...');
        
        if (menuBtn && navbar) {
            menuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const icon = this.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
                
                navbar.classList.toggle('active');
                
                console.log('🍔 Vanilla JS: Menu toggled!');
            });
        }
    }
    
});