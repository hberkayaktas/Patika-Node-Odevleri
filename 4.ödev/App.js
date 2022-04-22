const fs = require('fs'); //modülü dahil ettik

var dosyaolusturma = () => fs.writeFile('employees.json',
            '{"name": "Employee 1 Name", "salary": 2000}',
            'utf8',(err)=>{
                  if(err) console.log(err);
                  console.log('Json Dosyası Oluşturuldu');

});

var dosyaokuma = () => fs.readFile('employees.json',
            'utf8',
            (err,data) =>{
                  if(err) console.log(err);
                  const obj = JSON.parse(data);
                  //console.log(obj);
                  console.log(obj);
                  console.log('Dosya Okundu');
})

var dosyaguncelleme = () => fs.appendFile('employees.json',
            ',\n{"name": "Employee 2 Name", "salary": 3000}',
            'utf8',(err)=>{
                  if(err) console.log(err);
                  console.log('Json Dosyası Güncellendi');

});

var dosyasilme = () => fs.unlink('employees.json',(err) =>{
      if(err) console.log(err);
      console.log('Dosya Silme Tamamlandı');
})

//dosyaolusturma();
//dosyaokuma();
//dosyaguncelleme();
dosyasilme();
