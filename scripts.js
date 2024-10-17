// Tambahkan fungsi sendMessage untuk mengirim pesan WhatsApp
function sendMessage(productName) {
    // Ganti nomor telepon dengan nomor WhatsApp Anda
    var phoneNumber = "6281213490878";
    // Pesan yang akan dikirimkan, termasuk nama produk
    var message = "Saya ingin memesan " + productName;
    // URL WhatsApp API dengan nomor telepon dan pesan yang disiapkan
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    // Buka link WhatsApp dengan pesan yang telah disiapkan
    window.open(whatsappUrl);
}

const navLinks = document.querySelectorAll('header nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Menghentikan aksi default

                const targetId = link.getAttribute('href'); // Mendapatkan target ID dari href

                // Gulir ke bagian target dengan efek halus
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Posisikan bagian di atas
                });
            });
        });