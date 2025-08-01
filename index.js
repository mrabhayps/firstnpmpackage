const msg="This is Simple package for test the concept of creating package and used in another project";
export function printApplication(name,message=msg){
    console.log(`Hello ${name} , Welcome to my simple package test.`);
    console.log(message);
}