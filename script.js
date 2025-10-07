// Perbaikan: getElementById (Bukan getElemenyById)
const tombol = document.getElementById('sapaButton');

function aksi() {
    // Tampilkan peringatan
    alert("Hutram! Selamat datang di profil saya.");

    // Tampilkan kotak konfirmasi
    const isConfirmed = window.confirm("Apakah Anda ingin lanjut menjelajah?");

    if (isConfirmed) {
        // Aksi jika tombol OK diklik
        console.log("Pengguna setuju untuk menjelajah.");
        // Ganti teks tombol sebagai respons
        tombol.textContent = 'Terima Kasih!';
    } else {
        // Aksi jika tombol Cancel diklik
        console.log("Pengguna membatalkan konfirmasi.");
        alert("Oke, terima kasih sudah mampir!");
    }
}

// Tambahkan Event Listener ke tombol
// Pastikan tombol.addEventListener dieksekusi setelah tombol dideklarasikan dan diinisialisasi
tombol.addEventListener('click', aksi);
