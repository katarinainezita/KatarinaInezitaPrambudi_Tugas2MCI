# Tugas 2 MCI

Nama : Katarina Inezita Prambudi

NRP : 5025211148



## Cerita Pendahuluan
Bayangkan kamu adalah seorang backend developer yang baru saja bekerja untuk sebuah perusahaan penyelenggara seminar ternama. Perusahaan ini sering bekerjasama dengan mengadakan acara-acara seperti TEDx, Tech in Asia Conference, Indonesia Knowledge Forum (IKF), Ideafest, dan sebagainya. 
Pada suatu hari, terdapat organisasi event bernama Schematics ITS yang ingin menjalin kerjasama dengan perusahaan kamu bekerja. Mereka ingin agar dibuatkan sistem untuk melakukan berbagai hal dalam acara seminar. Sebagai anggota baru tim, kamu diberikan tugas untuk mengembangkan backend sistem seminar acara Schematics BST.

## Deskripsi Tugas
Untuk memastikan kesuksesan proyek ini, kamu perlu menyelesaikan beberapa tahapan penting dalam pengembangan backend sistem seminar. Ketua tim ingin agar kamu bisa membuat API dengan framework Express JS yang dapat melakukan Create, Read, Update, dan Delete (CRUD) pada data seminar.

## Terdapat beberapa tahapan dalam proyek ini, diantaranya:

### 1. Analisis Kebutuhan

Sebelum memulai pengembangan API, kamu perlu menganalisis kebutuhan sistem seminar yang akan dibangun. Kamu akan diminta untuk membuat dokumentasi kebutuhan sistem yaitu berupa Skema basis data (CDM dan PDM).

Tabel yang dibuat terdiri dari tabel :

- User
- Booking 
- Pembayaran
- Seminar
- Tempat Duduk

Relasi yang dimiliki antar tabel :

a. Tabel User memiliki relasi one to many dengan tabel Booking

b. Tabel Booking memiliki relasi one to one dengan tabel Pembayaran

c. Tabel Seminar memiliki relasi one to many dengan tabel Booking

d. Tabel Seminar memiliki relasi one to many dengan tabel Tempat Duduk

Berikut CDM dari kelima tabel :

![App Screenshot](https://github.com/katarinainezita/KatarinaInezitaPrambudi_Tugas2MCI/blob/main/img/CDM.png)

Berikut PDM dari kelima tabel :

![App Screenshot](https://github.com/katarinainezita/KatarinaInezitaPrambudi_Tugas2MCI/blob/main/img/PDM.png)

### 2. Implementasi CRUD API
Setelah memahami kebutuhan sistem, kamu akan diminta untuk mengembangkan API menggunakan framework ExpressJS untuk melakukan operasi CRUD pada data seminar.

#### Cara Run Program

* Download main branch 
```
https://github.com/katarinainezita/KatarinaInezitaPrambudi_Tugas2MCI.git
```

* Install dependencies

```
npm install
```

* Jalankan Program
```
npm start
```

* Buka Postman dan coba menggunakan ``` localhost:3000 ```. Jika muncul error, maka dapat mengganti server pada file ```server.js ``` 

```
const port = 3001;
```

kemudian ketikkan ``` npm start ```

#### User

|   Command      | Method        | Routes  |
| :------------- |:-------------| :-----|
| GET All Users | GET | `/users` |
| GET User By Name      | GET      |   `/users/nama_user` |
| CREATE User | POST      |    `/users` |
| UPDATE User | PUT      |    `/users/nama_user` |
| DELETE User | DELETE      |    `/users/nama_user` |


#### Booking

|   Command      | Method        | Routes  |
| :------------- |:-------------| :-----|
| GET All Bookings | GET | `/bookings` |
| GET Booking By Id User      | GET      |   `/bookings/id_user` |
| CREATE Booking | POST      |    `/bookings` |
| UPDATE Booking | PUT      |    `/bookings/id_user` |
| DELETE Booking | DELETE      |    `/bookings/id_user` |


#### Pembayaran

|   Command      | Method        | Routes  |
| :------------- |:-------------| :-----|
| GET All  Payments | GET | `/pembayarans` |
| GET Payment By Id Booking      | GET      |   `/pembayarans/id_booking` |
| GET Payment By Id User      | GET      |   `/pembayarans/id_user` |
| CREATE Payment | POST      |    `/pembayarans` |
| UPDATE Payment | PUT      |    `/pembayarans/id_user` |
| DELETE Payment | DELETE      |    `/pembayarans/id_user` |

#### Seminar

|   Command      | Method        | Routes  |
| :------------- |:-------------| :-----|
| GET All Seminars | GET | `/seminars` |
| GET Seminar By Title      | GET      |   `/seminars/judul_seminar` |
| CREATE Seminar | POST      |    `/seminars` |
| UPDATE Seminar | PUT      |    `/seminars/judul_seminar` |
| DELETE Seminar | DELETE      |    `/seminars/judul_seminar` |

#### Booking

|   Command      | Method        | Routes  |
| :------------- |:-------------| :-----|
| GET All Seats | GET | `/tempatduduks` |
| GET Seat By Id Seminar      | GET      |   `/tempatduduks/id_seminar` |
| CREATE Seat | POST      |    `/tempatduduks` |
| UPDATE Seat | PUT      |    `/tempatduduks/id_seminar` |
| DELETE Seat | DELETE      |    `/tempatduduks/id_seminar` |


### 3. Deployment dan Dokumentasi API
Setelah berhasil membuat API, kamu bisa melakukan dokumentasi API kamu. 

#### Dokumentasi

Dokumentasi API melalui [Postman](https://documenter.getpostman.com/view/26796926/2s93XsXm9g)






