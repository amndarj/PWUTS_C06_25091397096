$(document).ready(function () {
    // Membuka dan menutup navigasi pada layar ponsel
    $(document).on("click", ".menu-mobile", function () {
        $(".navigasi").toggleClass("buka");
    });

    // Halaman katalog dan pemesanan menggunakan AJAX
    $(document).on("click", ".menu-ajax", function (event) {
        var halaman = $(this).attr("data-halaman");

        if (halaman === "beranda") {
            event.preventDefault();
            window.location.href = "index.html";
        } else if (halaman === "katalog" || halaman === "pemesanan") {
            event.preventDefault();
            muatHalaman(halaman);
        }
    });

    // Mengarahkan pengguna ke bagian Tentang Kami
    $(document).on("click", ".menu-tentang", function (event) {
        event.preventDefault();

        var bagianTentang = $("#tentang").get(0);

        if (bagianTentang) {
            bagianTentang.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Memuat halaman yang dipilih tanpa memuat ulang seluruh layout
    function muatHalaman(namaHalaman, produkDipilih) {
        var alamatHalaman = namaHalaman + ".html";

        $("#isi-halaman").html(
            '<div class="memuat">Memuat halaman...</div>'
        );

        $("#isi-halaman").load(alamatHalaman, function (response, status) {
            if (status === "error") {
                $("#isi-halaman").html(
                    '<div class="kosong">Halaman gagal dimuat. Jalankan website melalui server lokal seperti Laragon atau Live Server.</div>'
                );
                return;
            }

            $(".menu-ajax").removeClass("aktif");

            $('.menu-ajax[data-halaman="' + namaHalaman + '"]')
                .addClass("aktif");

            // Memilih produk secara otomatis dari tombol Pesan di katalog
            if (namaHalaman === "pemesanan" && produkDipilih) {
                $("#daftar-produk-pesan .produk-pilihan")
                    .first()
                    .val(produkDipilih);
            }

            if (namaHalaman === "katalog") {
                tampilkanProduk();
            }
        });
    }

    // Data produk yang ditampilkan pada katalog
    var daftarProduk = [
        {
            nama: "Butter Croissant",
            kategori: "Pastry",
            harga: 18000,
            gambar: "image/butter_kwasong.jpg",
            deskripsi: "Pastry berlapis dengan tekstur renyah di luar dan lembut di dalam.",
            alergen: "Mengandung gluten, susu, dan telur.",
            tersedia: "Tersedia"
        },
        {
            nama: "Chocolate Cake",
            kategori: "Cake",
            harga: 45000,
            gambar: "image/chocolate_cake.jpg",
            deskripsi: "Kue cokelat dengan rasa manis dan tekstur lembut.",
            alergen: "Mengandung gluten, susu, telur, dan kakao.",
            tersedia: "Tersedia"
        },
        {
            nama: "Roti Artisan",
            kategori: "Roti",
            harga: 22000,
            gambar: "image/roti_artisan.jpg",
            deskripsi: "Roti dengan bagian luar renyah dan bagian dalam bertekstur lembut.",
            alergen: "Mengandung gluten.",
            tersedia: "Tersedia"
        },
        {
            nama: "Strawberry Tart",
            kategori: "Pastry",
            harga: 32000,
            gambar: "image/strobeyi_tart.jpg",
            deskripsi: "Tart dengan krim lembut dan sentuhan buah yang segar.",
            alergen: "Mengandung gluten, susu, dan telur.",
            tersedia: "Tersedia"
        },
        {
            nama: "Cloud Bread",
            kategori: "Roti",
            harga: 15000,
            gambar: "image/cloud_bread.jpg",
            deskripsi: "Roti lembut dengan tekstur ringan dan empuk seperti awan, memiliki cita rasa manis.",
            alergen: "Mengandung gluten, susu, dan telur",
            tersedia: "Tersedia"
        },
        {
            nama: "Vanilla Cupcake",
            kategori: "Cake",
            harga: 20000,
            gambar: "image/vanila_cupcake.jpg",
            deskripsi: "Cupcake vanilla dengan topping krim dan biskuit.",
            alergen: "Mengandung gluten, susu, dan telur.",
            tersedia: "Tersedia"
        }
    ];

    // Mengubah angka harga menjadi format Rupiah
    function formatRupiah(angka) {
        return "Rp" + angka.toLocaleString("id-ID");
    }

    // Membuat pilihan produk untuk formulir pemesanan
    function buatPilihanProduk() {
        var pilihan = '<option value="">Pilih produk</option>';

        for (var i = 0; i < daftarProduk.length; i++) {
            pilihan +=
                '<option value="' + daftarProduk[i].nama + '">' +
                daftarProduk[i].nama +
                "</option>";
        }

        return pilihan;
    }

    // Menampilkan produk berdasarkan kata kunci dan kategori
    function tampilkanProduk() {
        var kataKunci = ($("#cari-produk").val() || "").toLowerCase();
        var kategoriDipilih = $("#filter-kategori").val() || "Semua";
        var hasil = [];

        for (var i = 0; i < daftarProduk.length; i++) {
            var produk = daftarProduk[i];

            var cocokNama =
                produk.nama.toLowerCase().indexOf(kataKunci) >= 0;

            var cocokKategori =
                kategoriDipilih === "Semua" ||
                produk.kategori === kategoriDipilih;

            if (cocokNama && cocokKategori) {
                hasil.push(produk);
            }
        }

        $("#daftar-katalog").html("");

        if (hasil.length === 0) {
            $("#daftar-katalog").html(
                '<div class="kosong">Produk tidak ditemukan. Coba kata kunci atau kategori lain.</div>'
            );
        } else {
            for (var j = 0; j < hasil.length; j++) {
                var item = hasil[j];

                var kartu = `
                    <div class="kartu">
                        <img src="${item.gambar}" alt="${item.nama}">
                        <div class="isi-kartu">
                            <span class="kategori">${item.kategori}</span>
                            <h3>${item.nama}</h3>
                            <p class="harga">${formatRupiah(item.harga)}</p>
                            <p class="keterangan-alergen">${item.alergen}</p>
                            <button
                                type="button"
                                class="tombol-kecil tombol-detail"
                                data-nama="${item.nama}"
                            >
                                Lihat Detail
                            </button>
                            <button
                                type="button"
                                class="tombol-kecil tombol-pesan"
                                data-nama="${item.nama}"
                            >
                                Pesan
                            </button>
                        </div>
                    </div>
                `;

                $("#daftar-katalog").append(kartu);
            }
        }

        $("#jumlah-hasil").text(hasil.length + " produk ditemukan");
    }

    // Menjalankan pencarian dan filter katalog
    $(document).on(
        "input change",
        "#cari-produk, #filter-kategori",
        function () {
            tampilkanProduk();
        }
    );

    // Menampilkan detail produk yang dipilih
    $(document).on("click", ".tombol-detail", function () {
        var namaProduk = $(this).attr("data-nama");
        var produk = cariProduk(namaProduk);

        if (produk) {
            $("#detail-produk").html(`
                <button
                    type="button"
                    class="tutup-detail"
                    aria-label="Tutup detail"
                >&times;</button>

                <span class="label-kecil">DETAIL PRODUK</span>
                <h3>${produk.nama}</h3>
                <p>${produk.deskripsi}</p>
                <p><b>Harga:</b> ${formatRupiah(produk.harga)}</p>
                <p><b>Kategori:</b> ${produk.kategori}</p>
                <p><b>Informasi alergen:</b> ${produk.alergen}</p>
                <p><b>Ketersediaan:</b> ${produk.tersedia}</p>
            `).show();
        }
    });

    // Menutup detail produk
    $(document).on("click", ".tutup-detail", function () {
        $("#detail-produk").hide().html("");
    });

    // Membuka formulir pemesanan dari katalog
    $(document).on("click", ".tombol-pesan", function () {
        var namaProduk = $(this).attr("data-nama");

        muatHalaman("pemesanan", namaProduk);
    });

    // Mencari data produk berdasarkan nama
    function cariProduk(namaProduk) {
        for (var i = 0; i < daftarProduk.length; i++) {
            if (daftarProduk[i].nama === namaProduk) {
                return daftarProduk[i];
            }
        }

        return null;
    }

    // Menambahkan baris pilihan produk
    $(document).on("click", "#tambah-produk", function () {
        var pilihanProduk = `
            <div class="baris-produk-pesan">
                <select
                    class="isian-wajib produk-pilihan"
                    required
                    aria-label="Pilih produk"
                >
                    ${buatPilihanProduk()}
                </select>

                <input
                    class="isian-wajib jumlah-pilihan"
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value="1"
                    required
                    aria-label="Jumlah produk"
                >

                <button
                    type="button"
                    class="hapus-produk"
                    aria-label="Hapus produk"
                    title="Hapus produk"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

                <small class="pesan-error error-produk"></small>
            </div>
        `;

        $("#daftar-produk-pesan").append(pilihanProduk);
    });

    // Menghapus baris produk dengan menyisakan minimal satu baris
    $(document).on("click", ".hapus-produk", function () {
        var jumlahBaris =
            $("#daftar-produk-pesan .baris-produk-pesan").length;

        if (jumlahBaris > 1) {
            $(this).closest(".baris-produk-pesan").remove();
        } else {
            alert("Minimal harus ada satu pilihan produk.");
        }
    });

    // Menghapus pesan error ketika pengguna memperbaiki isian
    $(document).on(
        "input change",
        "#form-pemesanan .isian-wajib",
        function () {
            $(this).css("border-color", "#e4d3c7");

            var grup = $(this).closest(".grup-form");
            grup.find(".pesan-error").text("").hide();

            $(this)
                .closest(".baris-produk-pesan")
                .find(".pesan-error")
                .text("")
                .hide();

            $("#pesan-sukses").hide().text();
        }
    );

    // Memeriksa formulir ketika tombol Kirim Pesanan ditekan
    $(document).on("submit", "#form-pemesanan", function (event) {
        event.preventDefault();

        var nama = $("#nama").val().trim();
        var telepon = $("#telepon").val().trim();
        var tanggal = $("#tanggal").val();
        var valid = true;
        var daftarPesanan = [];

        // Menghapus pesan error dari pemeriksaan sebelumnya
        $("#form-pemesanan .pesan-error").text("").hide();
        $("#form-pemesanan .isian-wajib")
            .css("border-color", "#e4d3c7");

        $("#pesan-sukses").hide().text("");

        // Memeriksa nama pelanggan
        if (nama === "") {
            tampilkanError(
                "#nama",
                "Nama pelanggan wajib diisi."
            );

            valid = false;
        }

        // Memeriksa nomor telepon
        if (
            telepon === "" ||
            !/^[0-9+\-\s]{9,16}$/.test(telepon)
        ) {
            tampilkanError(
                "#telepon",
                "Masukkan nomor telepon yang valid."
            );

            valid = false;
        }

        // Memeriksa setiap produk dan jumlah yang dipesan
        $("#daftar-produk-pesan .baris-produk-pesan").each(
            function () {
                var baris = $(this);
                var produk = baris.find(".produk-pilihan").val();
                var jumlah = Number(
                    baris.find(".jumlah-pilihan").val()
                );

                var barisValid = true;

                if (!produk) {
                    baris.find(".produk-pilihan")
                        .css("border-color", "#b3261e");

                    baris.find(".error-produk")
                        .text("Pilih produk yang ingin dipesan.")
                        .show();

                    valid = false;
                    barisValid = false;
                }

                if (
                    !Number.isInteger(jumlah) ||
                    jumlah < 1 ||
                    jumlah > 100
                ) {
                    baris.find(".jumlah-pilihan")
                        .css("border-color", "#b3261e");

                    baris.find(".error-produk")
                        .text("Jumlah setiap produk harus antara 1 sampai 100.")
                        .show();

                    valid = false;
                    barisValid = false;
                }

                if (barisValid) {
                    daftarPesanan.push({
                        nama: produk,
                        jumlah: jumlah
                    });
                }
            }
        );

        // Memastikan tidak ada produk yang dipilih dua kali
        var namaProdukDipilih = daftarPesanan.map(function (item) {
            return item.nama;
        });

        var adaDuplikat = namaProdukDipilih.some(
            function (namaProduk, index) {
                return namaProdukDipilih.indexOf(namaProduk) !== index;
            }
        );

        if (adaDuplikat) {
            $(".error-daftar-produk")
                .text(
                    "Produk yang sama dipilih lebih dari sekali. Gabungkan jumlahnya dalam satu baris."
                )
                .show();

            valid = false;
        }

        // Memeriksa tanggal pengambilan.
        if (tanggal === "") {
            tampilkanError(
                "#tanggal",
                "Tanggal pengambilan wajib dipilih."
            );

            valid = false;
        } else {
            var tanggalDipilih = new Date(tanggal + "T00:00:00");
            var hariIni = new Date();

            hariIni.setHours(0, 0, 0, 0);

            if (tanggalDipilih < hariIni) {
                tampilkanError(
                    "#tanggal",
                    "Tanggal pengambilan tidak boleh sudah lewat."
                );

                valid = false;
            }
        }

        // Menampilkan notifikasi jika semua isian valid
        if (valid) {
            var ringkasanProduk = daftarPesanan.map(
                function (item) {
                    return item.nama + " (" + item.jumlah + ")";
                }
            ).join(", ");

            $("#pesan-sukses")
                .show()
                .text(
                    "Pesanan berhasil dikirim! Produk: " +
                    ringkasanProduk +
                    ". Terima kasih telah memesan di Rifam Sweets."
                )
                .attr("role", "status");

            // Notifikasi sukses
            $("#pesan-sukses").get(0).scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            $("#form-pemesanan button[type='submit']")
                .html("Pesanan Terkirim ✓");
        }
    });

    // Menampilkan pesan error pada kolom yang sesuai
    function tampilkanError(id, pesan) {
        var kolom = $(id);

        kolom.css("border-color", "#b3261e");

        kolom.closest(".grup-form")
            .find(".pesan-error")
            .first()
            .text(pesan)
            .show();
    }
});