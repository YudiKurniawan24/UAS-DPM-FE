# Front-End Aplikasi Kontak

Aplikasi ini adalah front-end untuk manajemen kontak menggunakan React Native. Berikut adalah langkah-langkah untuk menginstal dan menjalankan aplikasi ini:

---

## Prasyarat

1. **Node.js** (versi 14 atau lebih baru)
2. **npm** atau **yarn**
3. **React Native CLI**

---

## Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username/project-repo.git
   cd project-repo
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```


## Menjalankan Aplikasi

1. **Jalankan Metro Bundler:**
   ```bash
   npx react-native start
   ```


## Struktur Direktori

```
project-repo/
├── src/
│   ├── screens/          # Halaman seperti Login, Dashboard, dll.
│   ├── service/          # API untuk komunikasi backend
│   └── App.js            # File utama aplikasi
├── .env                  # Konfigurasi API backend
├── package.json          # Dependensi proyek
└── README.md             # Dokumentasi proyek
```

---

## Troubleshooting

1. **Masalah koneksi ke backend:**
   - Periksa URL di file 
   - Pastikan server backend berjalan dengan benar.

2. **Masalah emulator Android:**
   - Pastikan Android Studio sudah dikonfigurasi.
   - Coba perintah berikut:
     ```bash
     adb kill-server
     adb start-server
     ```

---

## Lisensi

Proyek ini menggunakan lisensi MIT.
