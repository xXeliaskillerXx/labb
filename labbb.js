const fs = require('fs');
/*
fs.open('C:/Användare/elias.nywall/AppData/Roaming/Microsoft/Excel/labb1.csv', 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
*/
const csvFilePath='labb1.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
    let data = JSON.stringify(jsonObj);
    fs.writeFileSync('student.json', data);
})

 
// Async / await usage