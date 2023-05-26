let readline =require('readline').createInterface({  // importing read line module
  input:process.stdin,     // for taking input
  output:process.stdout      // for printing output
})

readline.question("Tell your name  ",name=>{   // It will ask question in console
       console.log(`Hi  ${name}`);
       readline.close();    // it will close question
})

  