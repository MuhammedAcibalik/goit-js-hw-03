/*
Görev 3. Bir sayı dizisini filtreleme
-----------------------
Parametre olarak bir sayı dizisi ve bir değer alan bir filterArray(numbers, value) fonksiyonu yazın. 
Fonksiyon, numbers dizisinden yalnızca value değerinden büyük olan sayılardan oluşan yeni bir dizi döndürmelidir.

Özelliklerin içinde:
- Eşleşen sayıları ekleyeceğiniz boş bir dizi oluşturun.
- numbers dizisinin her bir öğesi üzerinde yineleme yapmak için bir döngü kullanın.
- Her bir öğeyi kontrol etmek ve dizinize eklemek için döngü içindeki koşullu if ifadesini kullanın.
- Sonuç olarak eşleşen sayıları içeren yeni dizinizi döndürün.
*/

function filterArray(numbers, value) {
  // Sonuçları saklamak için boş bir dizi oluşturuyoruz
  const filteredNumbers = [];
  
  // Dizi üzerinde döngü ile geziniyoruz
  for (const number of numbers) {
    // Eğer sayı, value değerinden büyükse
    if (number > value) {
      // Sonuç dizisine ekliyoruz
      filteredNumbers.push(number);
    }
  }
  
  // Filtre edilmiş diziyi döndürüyoruz
  return filteredNumbers;
}

// Test çalıştırmaları
console.log('Task 3: Filter Array of Numbers');
console.log('------------------------------');
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log('------------------------------'); 