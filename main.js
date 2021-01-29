// 06 - Spread Operator
/* let arrOne = [1,2,3],
    arrTwo = [4,5];
console.log(arrOne.concat(arrTwo));

let allArrays = [...arrOne, ...arrTwo];
console.log(allArrays);

// function sum(x,y,z){
//     return x + y + z;
// }
// console.log(sum(1,2,3));

const sum = (x,y,z) => x + y + z;
const myNumber = [1,2,3];
console.log(sum(myNumber)); // undefined
console.log(sum(...myNumber)); // 6
console.log(myNumber); // [1,2,3]
console.log(...myNumber); // 1,2,3 (It Takes The Elements Inside The Array) */

/* let arrOne = [1,2,3],
    arrTwo = [4,5];
    customArr = [1,2,3, ...arrTwo, 6,7];
console.log(customArr);
*/

/* let arrOne = [1,2,3],
    arrTwo = arrOne;

arrTwo.push(4);

console.log(arrOne);
console.log(arrTwo); */

/* let arrOne = [1,2,3],
    // arrTwo = [...arrOne]; Or:
    arrTwo = [].concat(arrOne);
arrTwo.push(4);
console.log(arrOne);
console.log(arrTwo); */

/* let arrOne = [1,2,3,100,-20,-10,500];
console.log(Math.min(1,2,3,100,-20,-10,500));
console.log(Math.min(...arrOne));
console.log(Math.min.apply(Math,arrOne)); */

// ________________________________________

// 07 - Default Parameter:
/* function showMyInfo(username, role, theme){
    return `Hello ${username}, Your Role Is: ${role}, Website Theme Is: ${theme}`;
}
console.log(showMyInfo("Kinan","Admin","Blue")); // Hello Kinan, Your Role Is: Admin, Website Theme Is: Blue
console.log(showMyInfo("Kinan","Admin")); // Hello Kinan, Your Role Is: Admin, Website Theme Is: undefined
console.log(showMyInfo()); // Hello undefined, Your Role Is: undefined, Website Theme Is: undefined */

// Default Value Before ES6:
/* function showMyInfo(username,role,theme){
    username = username === undefined ? "Default User" : username;
    role = role === undefined ? "Default Role" : role;
    theme = theme === undefined ? "Default Theme" : theme;
    return `Hello ${username}, Your Role Is: ${role}, Website Theme Is: ${theme}`;
}
console.log(showMyInfo("Kinan")); // Hello Kinan, Your Role Is: undefined, Website Theme Is: undefined
console.log(showMyInfo()); // Hello Default User, Your Role Is: undefined, Website Theme Is: undefined
console.log("*".repeat(10));
console.log(showMyInfo());
console.log(showMyInfo("Kinan"));
console.log(showMyInfo("Kinan","Admin"));
console.log(showMyInfo("Kinan","Admin","Black")); */

// Other Example With (Truthy Falsy Butter)
/* function showMyInfo(username,role,theme){
    username = username || "Default User";
    role = role || "Default Role";
    theme = theme || "Default Theme";
    return `Hello ${username}, Your Role Is: ${role}, Website Theme Is: ${theme}`;
}
console.log(showMyInfo("Kinan")); // Hello Kinan, Your Role Is: undefined, Website Theme Is: undefined
console.log(showMyInfo()); // Hello Default User, Your Role Is: undefined, Website Theme Is: undefined
console.log("*".repeat(10));
console.log(showMyInfo());
console.log(showMyInfo("Kinan"));
console.log(showMyInfo("Kinan","Admin"));
console.log(showMyInfo("Kinan","Admin","Black")); */


// Example With Default Value (Set Default Parameters):
/* function showMyInfo(username = "Default User",role = "Default Role",theme = "Default Theme"){
    return `Hello ${username}, Your Role Is: ${role}, Website Theme Is: ${theme}`;
}
console.log(showMyInfo()); // Hello Default User, Your Role Is: Default Role, Website Theme Is: Default Theme
console.log(showMyInfo("Kinan")); // Hello Kinan, Your Role Is: Default Role, Website Theme Is: Default Theme
console.log(showMyInfo("Kinan","Admin")); // Hello Kinan, Your Role Is: Admin, Website Theme Is: Default Theme
console.log(showMyInfo("Kinan","Admin","Black")); // Hello Kinan, Your Role Is: Admin, Website Theme Is: Black */

// ________________________________________

// 08 - Rest Parameter
/* function sum(x,y,z){
    return x + y + z;
}
console.log(sum(2,5,6)); */

/* function showInfo(a,b,c,...myParams){
    console.log("param a", a);
    console.log("param b", b);
    console.log("param c", c);
    console.log("param myParams", myParams);
    return `Done`;
}
console.log(showInfo("one","two","three","four","five","six","seven")); */

/* function addAll(...myParams){ // ...myParams (Rest Parameters ) Must Always Be In The Last
    let sum = 0;
    for(let myParam of myParams) sum += myParam;
    return sum;
}
console.log(addAll(1));
console.log(addAll(1,2,3));
console.log(addAll(1,2,10,50,100)); */

// ________________________________________

// 9 - New String Methods - startsWith, endsWith:
// startsWith => string.startsWith(Search String, Position = 0)
// endsWith => string.endsWith(Search String, End Position = string.length)

/* let x = "Musician Kinan Ashkar";
console.log(x.startsWith("Mus")); // True
console.log(x.startsWith("K")); // False
console.log(x.startsWith("musician")); // False
console.log(x.startsWith("Kin", 9)); // True
*/

/* let x = "Musician Kinan Ashkar";
console.log(x.endsWith("Ashkar", x.length)); // True */

/* let x = "Video - Learn How To Learn";
console.log(x.endsWith("Learn")); // True
console.log(x.endsWith("Learn", x.length)); // True
console.log(x.endsWith("To")); // False

console.log("Video - Learn How To".length); // 20
console.log(x.endsWith("To", 20)); // True */

// ________________________________________

// 10 - New String Methods - Includes, Repeat:
// Includes => string.includes(Search String, Position = 0)

/* let x = "Musician Kinan Ashkar";
console.log(x.includes("Kinan")); // True
console.log(x.includes("Kinan", 9)); // True */

/* let x = "Musician Kinan Ashkar";
console.log(x.repeat(2)); */

// ________________________________________