const msg="This is Simple package for test the concept of creating package and used in another project";

//ESM export module for import.
// export function printApplication(name,message=msg){
//     console.log(`Hello ${name} , Welcome to my simple package test.`);
//     console.log(message);
// }

function printApplication(name,message=msg){
    console.log(`Hello ${name} , Welcome to my simple package test.`);
    console.log(message);
}

//common JS module export 

module.exports={
    printApplication
}