// // let a = 5, b = 8;
// // do{
// //     a++
// //     console.log(a);
// // } while(a < b);
// let talaba = {
//   name: "shoxrux",
//   surname: "raximjonov",
//   age: 19,
//   inMarried: false,
//   number: 998992344321,
//   isStudent: true,
// };
// // for (const key in talaba) {
// //     console.log(talaba[key]);
// // }
// // console.log(talaba.age);
// // console.log(`Ismi ${talaba.age}`);

// let fruit = ['olma', 'nok', 'behi', "uzum"]

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }
// // console.log(fruit[1]);

let  data = [
    {
        name: "abror",
        surname: "azizov",
        age: 22,
        isMarried: false,
        region: 'Tashkent'
    },
     {
        name: "zohid",
        surname: "qodirov",
        age: 19,
        isMarried: true,
        region: 'Andijon'
    },
     {
        name: "kamol",
        surname: "botirov",
        age: 18,
        isMarried: false,
        region: 'sirdaryo'
    }
]

for (const i of data) {
    if (i.age > 20) {
    console.log(`ismi ${i.name}, Familiyasi: ${i.surname}, yoshi: ${i.age}, oilaviy holati: ${i.isMarried ? "Uylangan": "Uylanmagan"}
        `);
    } else{
        console.log('eng kichik yosh chegarasi 20!');
        
    }
}

