function circleArea(yaricap){
      Alan = 3.14 * (yaricap * yaricap);
      console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${Alan}`);
}
function circleCircumference(yaricap){
      cevre = 3.14 * yaricap * 2;
      console.log(`Yarıçapı ${yaricap} olan dairenin çevresi: ${cevre}`);
}

//circleArea(5);
//circleCircumference(5);
module.exports = {
      circleArea, // Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.
      circleCircumference
}