//scrol and navbar
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const heroSection = document.getElementById("hero"); // Pastikan hero section memiliki ID 'hero'
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Event untuk mengubah warna navbar saat scroll melewati hero section
    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSection.offsetHeight - 50) {
            navbar.classList.add("bg-gray-800", "shadow-lg");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-gray-800", "shadow-lg");
        }
    });

    // Toggle mobile menu
    menuBtn.addEventListener("click", function () {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            setTimeout(() => {
                mobileMenu.classList.remove("scale-y-0", "opacity-0");
                mobileMenu.classList.add("scale-y-100", "opacity-100");
            }, 10);
        } else {
            mobileMenu.classList.remove("scale-y-100", "opacity-100");
            mobileMenu.classList.add("scale-y-0", "opacity-0");
            setTimeout(() => mobileMenu.classList.add("hidden"), 300);
        }
    });

    // Tutup menu saat salah satu item diklik
    document.querySelectorAll("#mobile-menu a").forEach(item => {
        item.addEventListener("click", function () {
            mobileMenu.classList.remove("scale-y-100", "opacity-100");
            mobileMenu.classList.add("scale-y-0", "opacity-0");
            setTimeout(() => mobileMenu.classList.add("hidden"), 300);
        });
    });
});

// scroll to top
// Tampilkan tombol ketika scroll ke bawah
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});
// Ambil elemen tombol
const scrollToTopBtn = document.getElementById("scrollToTop");
// Fungsi scroll ke atas
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//slider
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});

//proyek
function openModal(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("imageModal").classList.remove("hidden");
    document.getElementById("imageModal").classList.add("flex");
}

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("imageModal").classList.add("hidden");
    document.getElementById("imageModal").classList.remove("flex");
});

document.getElementById("imageModal").addEventListener("click", function (event) {
    if (event.target === this) {
        this.classList.add("hidden");
        this.classList.remove("flex");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var projectSlider = new Swiper(".projectSwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        pagination: {
            el: ".project-pagination",
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});

// sertif
document.addEventListener("DOMContentLoaded", function () {
var certificateSwiper = new Swiper(".certificateSwiper", {
loop: true,
slidesPerView: 1,
spaceBetween: 20,
navigation: {
    nextEl: ".btn-next-cert",
    prevEl: ".btn-prev-cert",
},
pagination: {
    el: ".certificate-pagination",
    clickable: true,
},
breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
},
});
});

// pengalaman
function togglePopup() {
    let popup = document.getElementById("experience-popup");
    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Mencegah scroll latar belakang
    } else {
        popup.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
}
// hubungi
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert('Pesan berhasil dikirim!');
        form.reset();
    } else {
        alert('Terjadi kesalahan. Silakan coba lagi.');
    }
});



