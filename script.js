//If, Else, Nested If
//meminta input tinggi badan dari pengguna
let tinggiBadan = parseInt(prompt("Masukkan tinggi badan pengunjung:"));
//menentukan kategori pengguna yang boleh masuk
if (tinggiBadan < 0) {
  console.log("Tinggi badan tidak valid.");
} else if (tinggiBadan < 110) {
  console.log("Tidak boleh masuk.");
} else if (tinggiBadan < 145) {
  console.log("Boleh masuk, tetapi didampingi.");
} else {
  console.log("Diperbolehkan masuk");
}

//Switch Case
//meminta pilihan dari pengguna
let keberuntungan = prompt(
  "Pilih aksi (Kantong Kanan, Tirai 3, atau Box Biru):"
);
//menggunakan switch case untuk menentukan tindakan berdasarkan pilihan
switch (keberuntungan) {
  case "Kantong Kanan":
    console.log("Selamat anda mendapatkan uang tunai sebesar Rp.500.000");
    break;
  case "Tirai 3":
    console.log("Selamat anda mendapatkan mobil Porsche.");
    break;
  case "Box Biru":
    console.log("Maaf anda belum beruntung, silahkan coba lagi.");
    break;
  default:
    console.log("Pilihan tidak valid.");
}

//For Statement
//array dengan beberapa elemen
let chara = ["Choso", "Shanks", "Makima", "Dazai", "Saitama"];
//menggunakan for statement untuk mencetak elemen-elemen dalam array
for (let i = 0; i < chara.length; i++) {
  console.log("Chara ke-" + (i + 1) + ": " + chara[i]);
}

//While
//meminta pengguna memasukkan angka negatif
let add;
let value;
while (true) {
  add = prompt("Masukkan angka negatif:");
  value = parseFloat(add);
  if (!isNaN(value) && value < 0) {
    break;
  } else {
    alert("Input tidak valid. Harap masukkan angka negatif.");
  }
}
console.log("Anda memasukkan angka negatif: " + value);

//Do While
//meminta pengguna memasukkan angka negatif
let masukkan;
let nilai;
do {
  masukkan = prompt("Masukkan angka negatif:");
  nilai = parseFloat(masukkan);
  if (!isNaN(nilai) && nilai < 0) {
    break;
  } else {
    alert("Input tidak valid. Harap masukkan angka negatif.");
  }
} while (true);
console.log("Anda memasukkan angka negatif: " + nilai);

//Function
//mengonversi suhu dari Kelvin ke Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
let kelvin = parseFloat(prompt("Masukkan suhu dalam Kelvin:"));
let celsius = kelvinToCelsius(kelvin);
//menampilkan hasil konversi
console.log(
  kelvin + " derajat Kelvin sama dengan " + celsius.toFixed(2) + " derajat Celsius."
);