# 🌙 Luna Content Creation

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![Tech](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Theme](https://img.shields.io/badge/Bleu_de_France-0055A4?style=for-the-badge)

Selamat datang di **Luna Content Creation** — sebuah tool eksklusif untuk merangkai narasi sejarah yang elegan dan mendalam. Dikembangkan khusus untuk **Luna Historie**, platform yang mengusung estetika biru klasik Prancis dalam setiap lembar kisahnya.

![Screenshot](./screenshot.png)

---

## 🎨 Visi Visual
Aplikasi ini dirancang untuk menyatukan presisi data dengan keindahan visual. Terinspirasi dari aristokrasi Prancis abad ke-18 dan keanggunan warna biru *bleu de France*, setiap slide yang Anda buat adalah sebuah artefak digital yang siap memikat audiens.

![Sample Slide](./slides/slide-1.png)
![Sample Slide](./slides/slide-2.png)
![Sample Slide](./slides/slide-11.png)

---

## 🌟 Fitur Unggulan
- 📜 **Import JSON Terstruktur:** Tuangkan naskah sejarah Anda ke dalam format data yang rapi.
- 🖼️ **Dynamic Slide Engine:** Visualisasi otomatis konten menjadi slide berestetika tinggi.
- 🏛️ **Template Library (Versailles Collection):** Koleksi tata letak slide yang dirancang khusus untuk narasi sejarah.
- 🖋️ **Export Caption:** Konversi narasi slide menjadi caption media sosial yang memikat.

---

## 🚀 Panduan Penggunaan

### 1. Memulai Narasi
Buka panel **"Import Content JSON"** di sisi kiri. Input naskah sejarah Anda dengan struktur berikut:

```json
{
  "tanggal": "",
  "kata-kunci-gambar": "",
  "judul-hook": "Misteri Bastille",
  "slides": [
    {
      "judul": "Awal Mula",
      "materi": "Sejarah dimulai dari...",
      "template_to_use": "content_basic"
    }
  ],
  "kalimat-penutup": "",
  "caption": "",
  "hashtags": [],
  "referensi": [],
}
```

### 2. Menambahkan Slide Baru
Untuk memperluas narasi, tambahkan objek slide baru ke dalam array `slides` di JSON Anda. Pastikan setiap slide memiliki `judul`, `materi`, dan `template_to_use` yang sesuai.

---

## 🛠️ Perluasan Template (Custom Atelier)

Untuk menambahkan desain template slide baru ke dalam *Atelier* Luna Historie:

1.  **Crafting:** Buat komponen React baru di `src/slides/template/` (contoh: `LunaRoyalCover.jsx`).
2.  **Define Layout:** Rancang struktur JSX Anda dengan estetika biru khas Prancis.
3.  **Registration:** Daftarkan template di `src/slides/Slide.jsx` ke dalam objek `templates`:
    ```jsx
    import LunaRoyalCover from "./template/LunaRoyalCover";

    const templates = {
      "royal_cover": <LunaRoyalCover ... />
    };
    ```
4.  **Implementation:** Pilih dan klik `"royal_cover"` untuk menggunakan template.

---

> *L'histoire est une lumière qui éclaire le passé. Luna Historie — Membawa sejarah kembali hidup.* ⚜️
