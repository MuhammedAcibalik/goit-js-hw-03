/*
Görev 2. Dizi kompozisyonu
-----------------------
Üç parametre alan makeArray adında bir fonksiyon yazın: firstArray, secondArray ve maxLength. 
Fonksiyon, firstArray'deki tüm elemanları ve ardından secondArray'deki tüm elemanları içeren 
yeni bir dizi oluşturmalıdır.

- Yeni dizideki eleman sayısı maxLength'ten büyükse, fonksiyon dizinin maxLength değerindeki 
  eleman uzunluğuna sahip bir kopyasını döndürmelidir.
- Aksi takdirde, fonksiyon yeni dizinin tamamını döndürmelidir.
*/

function makeArray(firstArray, secondArray, maxLength) {
  // İki diziyi birleştiriyoruz
  const newArray = firstArray.concat(secondArray);
  
  // Eğer dizi uzunluğu maxLength'ten büyükse, diziyi kısaltıyoruz
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  
  // Değilse, diziyi olduğu gibi döndürüyoruz
  return newArray;
}

// Test çalıştırmaları
console.log('Task 2: Array Composition');
console.log('-------------------------');
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log('-------------------------'); 