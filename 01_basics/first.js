console.log("Pankaj Kumar")// use for display the output

//variables
const accountName="Pankaj Kumar";
let accountEmail="pankajkr.vitj@gmail.com";
var accountPassword="98765432";
accountCity="Buxar"; //also don not use this type variables

//now change their values
// accountName="vishal kumar"; //with const variable you can't change the value, const means constant
accountEmail="vishal@gmail.com";
accountPassword="98765432"; 
accountCity="Arrah";

// to print multiple variables at once use console.table instead of console.log

console.table([accountName,accountEmail,accountPassword,accountCity]);

/*
prefer not to use (var) because of issue in block scope and functional scope
*/