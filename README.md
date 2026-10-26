# RIFAM SWEETS (Bakery & Patisserie)

## Identitas Mahasiswa
| Keterangan | Detail |
|---|---|
| Nama | Amanda Riyadhotul Jannah |
| NIM | 25091397096 |
| Kelas | 2025C |
| Mata Kuliah | Pemrograman Web |
| Jenis Tugas | Ujian Tengah Semester (UTS) |
| Nama Proyek | Rifam Sweets (Bakery & Patisserie) |

---

## 1. Deskripsi Proyek
Rifam Sweets merupakan website katalog dan pemesanan produk bakery dan patisserie yang dikembangkan untuk memenuhi tugas Ujian Tengah Semester mata kuliah Pemrograman Web. Website ini dirancang untuk memberikan informasi mengenai berbagai produk roti, cake, dan pastry, sehingga pengunjung dapat melihat pilihan produk beserta harga, kategori, deskripsi, dan informasi alergennya.
Nama Rifam berasal dari gabungan nama tiga mahasiswa, yaitu Risma, Fatwa, dan Manda. Website ini mengangkat cerita usaha yang berawal dari kegiatan mencoba membuat roti secara sederhana, kemudian mendapatkan respons positif dari banyak orang.

## 2. Tujuan Pembuatan
Tujuan pembuatan website Rifam Sweets adalah menerapkan materi Pemrograman Web ke dalam sebuah website yang memiliki tampilan menarik, mudah digunakan dan memenuhi kebutuhan pelanggan. Selain itu, proyek ini bertujuan untuk mengimplementasikan HTML sebagai struktur halaman, CSS untuk pengaturan tampilan, serta JavaScript dan jQuery untuk menambahkan interaksi pada website.

## 3. Fitur Website
Website Rifam Sweets memiliki beberapa fitur utama sebagai berikut.

1. **Halaman Beranda**  
   Menampilkan pengenalan Rifam Sweets, produk unggulan, dan cerita singkat mengenai usaha.

2. **Katalog Produk**  
   Menampilkan daftar produk bakery dan patisserie beserta gambar, kategori, harga, dan informasi alergen.

3. **Pencarian dan Filter Produk**  
   Memungkinkan pengunjung mencari produk berdasarkan nama dan menyaring produk berdasarkan kategori.

4. **Detail Produk**  
   Menampilkan informasi tambahan mengenai deskripsi, harga, kategori, ketersediaan, dan alergen produk yang dipilih.

5. **Formulir Pemesanan**  
   Menyediakan formulir untuk memasukkan nama pelanggan, nomor telepon, pilihan produk, jumlah pesanan, tanggal pengambilan, dan catatan tambahan.

6. **Pemesanan Beberapa Produk**  
   Pengunjung dapat menambahkan beberapa baris produk dalam satu formulir, menentukan jumlah masing-masing produk, dan menghapus baris produk yang tidak diperlukan.

7. **Validasi Formulir**  
   Memeriksa kelengkapan data, format nomor telepon, pilihan produk, jumlah pesanan, dan tanggal pengambilan sebelum menampilkan notifikasi.

8. **Notifikasi Pemesanan**  
   Menampilkan pemberitahuan ketika formulir berhasil melewati proses validasi.

9. **Navigasi AJAX**  
   Menggunakan jQuery AJAX untuk memuat halaman katalog dan pemesanan ke dalam area konten utama tanpa memuat ulang seluruh halaman.

10. **Navigasi Responsif**  
    Menyediakan tombol navigasi untuk mempermudah penggunaan menu pada layar berukuran kecil.

## 4. Teknologi yang Digunakan
Teknologi dan pustaka yang digunakan dalam pengembangan website ini meliputi:
- **HTML5** untuk menyusun struktur halaman dan elemen formulir.
- **CSS3** untuk mengatur tata letak, warna, tipografi, dan tampilan responsif.
- **JavaScript** untuk mengatur logika program dan interaksi pengguna.
- **jQuery 3.7.1** untuk mempermudah manipulasi elemen HTML, penanganan event, dan pemuatan halaman menggunakan AJAX.
- **Font Awesome 6.5.2** untuk menampilkan ikon pada navigasi, tombol, dan bagian website lainnya.
- **Git dan GitHub** untuk mengelola versi kode dan mengumpulkan proyek.

## 5. Struktur Folder Proyek
Struktur folder website Rifam Sweets terdiri atas file HTML untuk halaman website, folder CSS untuk pengaturan tampilan, folder JavaScript untuk interaksi, serta folder image untuk menyimpan gambar produk dan pendukung website.

PWUTS_C06_NIM/
├── index.html
├── katalog.html
├── pemesanan.html
├── README.md
├── css/
│   └── mystyle.css
├── js/
│   └── script.js
└── image/
    ├── baker.jpg
    ├── butter_kwasong.jpg
    ├── chocolate_cake.jpg
    ├── cloud_bread.jpg
    ├── display.jpg
    ├── roti_artisan.jpg
    ├── strobeyi_tart.jpg
    └── vanila_cupcake.jpg

## 6. Cara Menjalankan Website
Untuk menjalankan website Rifam Sweets, ikuti langkah-langkah berikut.
1. Unduh atau salin repositori proyek ke komputer.
2. Pastikan seluruh file HTML, CSS, JavaScript, dan gambar berada pada folder yang sesuai.
3. Buka folder proyek menggunakan editor kode, seperti Visual Studio Code.
4. Jalankan website melalui server lokal, misalnya Laragon atau ekstensi Live Server pada Visual Studio Code.
5. Buka website melalui alamat server lokal yang digunakan.
6. Gunakan menu Beranda, Katalog, dan Pemesanan untuk mencoba fitur-fitur yang tersedia.

Penggunaan server lokal membantu pemuatan halaman katalog dan pemesanan yang menggunakan AJAX.

## 7. Catatan Implementasi dan Pengujian
Pengembangan website dilakukan dengan memisahkan struktur halaman, aturan tampilan, dan logika interaksi ke dalam file HTML, CSS, dan JavaScript. Pemisahan tersebut bertujuan agar kode lebih terorganisasi dan lebih mudah dipelihara.
Pada halaman katalog, data produk digunakan untuk menampilkan daftar produk, melakukan pencarian, menyaring kategori, serta menampilkan detail produk. Pada halaman pemesanan, JavaScript digunakan untuk menambahkan dan menghapus pilihan produk, memvalidasi isian formulir, serta menampilkan notifikasi setelah data dinyatakan valid.
Formulir pemesanan pada proyek ini masih berupa simulasi di sisi pengguna. Notifikasi berhasil tidak berarti pesanan telah dikirim ke WhatsApp, disimpan ke database, atau diterima oleh server karena integrasi backend belum diterapkan.

## 8. Batasan Sistem
Website Rifam Sweets dikembangkan sebagai proyek pembelajaran Pemrograman Web. Oleh karena itu, beberapa fungsi masih memiliki batasan, yaitu:
- Data produk masih dikelola melalui kode JavaScript dan belum menggunakan database.
- Formulir pemesanan belum terhubung dengan backend.
- Notifikasi keberhasilan hanya menunjukkan bahwa data telah melewati validasi pada sisi pengguna.
- Belum tersedia sistem akun pelanggan, autentikasi, pembayaran, dan pelacakan pesanan.
- Informasi produk dan ketersediaannya merupakan data contoh untuk keperluan demonstrasi.

---

**Dibuat untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web.**
