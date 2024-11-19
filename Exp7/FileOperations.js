// const fs=require('fs');
// fs.writeFile("file2.txt","hello valeska",
// function(err){
//     if(err){
//     console.log(err)
//     }
//     else{
//         console.log("write operation was performed successfully ")
//     }
// });

//read file
const fs=require("fs");
// var cont=fs.readFile("file.txt","utf-8",function(err,cont){
//     if(err){
//         console.log(err);
//     }
//    else{
//         console.log(cont)
//    }
// });

//acess file
// fs.access("val.txt",fs.F_OK,function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("Access")
// })

//Rename 
// fs.rename("file.txt" ,"val.txt",function(err){
//         if(err){
//         console.log(err);
//     }
//     console.log("FileRenamed")
// })

//Copy file
// fs.copyFile("val.txt","rosario.txt" ,function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("File Copied")
// })

//Append 
fs.appendFile("file2.txt" ,"Have a good day " ,function(err){
   if(err){
    console.log(err)
   }
   console.log("Content appended to the file")
})