# 🚗 Car Simulator

JavaScript Factory Function yapısı kullanılarak geliştirilmiş, temel araç durumunu ve kullanım dinamiklerini simüle eden bir nesne modeli.

## 📌 Özellikler

* **Dinamik Nesne Üretimi:** `marka`, `model`, `kilometre` ve `fiyat` parametreleriyle özelleştirilmiş araç nesnesi oluşturur.
* **Varsayılan Depo Seviyesi:** Her yeni araç varsayılan olarak `%50` yakıt seviyesiyle başlar.
* **Yakıt İkmali (`refuel`):** Belirtilen miktarda yakıt ekler; depo kapasitesi maksimum `%100` ile sınırlandırılmıştır.
* **Sürüş Simülasyonu (`drive`):**
  * Aracın toplam kilometresini artırır.
  * Her 100 km sürüşte yakıt seviyesini `%5` düşürür (en az %0).
  * Her 100 km sürüşte aracın piyasa değerini `50 TL` düşürür (en az 0 TL).
* **Fiyat Sorgulama (`getPrice`):** Aracın güncel piyasa değerini biçimlendirilmiş bir metin olarak döner.

---

## 💻 Kullanım

```javascript
const carSimulator = require('./araba.js');

// Yeni bir araç nesnesi tanımlama
const oto = carSimulator("Renault", "Clio", 10000, 500000);

// Fiyat bilgisi alma
console.log(oto.getPrice()); 
// Çıktı: Arabanın güncel piyasa değeri 500000 TL'dir.

// Sürüş yapma (200 km)
console.log(oto.drive(200)); 
// Çıktı: Arabanin'nin guncel kilometresi:10200 dir.
// (Depo: %40'a, Fiyat: 499900 TL'ye düşer)

// Yakıt doldurma
console.log(oto.refuel(30)); 
// Çıktı: Depo %70 doludur.
