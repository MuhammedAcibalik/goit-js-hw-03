/*
Görev 1. Slug oluşturucu
-----------------------
Makalenin başlığını, title parametresini alan ve bu dizeden oluşturulan slug'ı döndüren 
bir slugify(title) işlevi yazın.

- title parametresinin değeri, sözcükleri yalnızca boşluklarla ayrılmış dizeler olacaktır.
- Tüm slug karakterleri küçük harf olmalıdır.
- Tüm slug kelimeler bir tire ile ayrılmalıdır.
*/

function slugify(title) {
  // Metni küçük harfe çeviriyoruz
  // Boşluklara göre parçalıyoruz
  // Tire ile birleştiriyoruz
  return title.toLowerCase().split(" ").join("-");
}

// Test çalıştırmaları
console.log('Task 1: Slug Creator');
console.log('----------------------');
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
console.log('----------------------'); 