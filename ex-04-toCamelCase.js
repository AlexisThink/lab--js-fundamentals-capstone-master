
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */
function toCamelCase(text){
    var newArray = lowerCaseOut(text);
    var message ="";

    for(var i = 0; i < newArray.length; i++){
        var current = newArray[i];

        if(current === " "){
            newArray[i+1] = newArray[i+1].toUpperCase();
            newArray[i] = "";            
        } 
    }

    for (var j = 0; j < newArray.length; j++){
        message += newArray[j];
    }
    return message;
}

function lowerCaseOut(string){
    var newArray = Array.from(string);
    var final = [];
    for (var i = 0; i < newArray.length; i++){
        final.push(newArray[i].toLowerCase());
    }
    return final
}

// console.log(lowerCaseOut("Bienvenido alexis al programa"))


//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
