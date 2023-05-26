const fs=require('fs');  // Importing file system
const readline =require('readline'); // Importing readline function

const readstreame= fs.createReadStream("read.txt")   // Creating path for the file to be read

const read=readline.createInterface({  // Providing function to read line by line
    input:readstreame
})
read.on('line',line=>{  // Adding event and reading line
    console.log(line);
})