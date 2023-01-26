// // power function 

// function power (a, b){
//    let c= a**b;
//    console.log(c); 
// }


// power(2,3);


// function factorial  
// function factorial (a){
//       if(a == 0 || a == 1){
//     return 1;
//  } else{
//      return a *factorial (a-1);
//         }
// }

// console.log(factorial(5));


// RUN factorial(5)

// 1 is (a == 0 || a == 1) => No  

//    then return a *factorial (5-1);  /*a=4 */
//  ///           5 * factorial (4) 
// 2 is (a == 0 || a == 1) => No  
//    then return  a *factorial (4-1);  /*a=3 */
// ///             4 * factorial (3) 

// 3 is (a == 0 || a == 1) => No  
//    then return  a *factorial (3-1);  /*a=2 */
//    ///             3 * factorial (2) 

// 4 is (a == 0 || a == 1) => No  
//    then return  a *factorial (2-1);  /*a=1 */
//  ///             2 * factorial (1)   

// 5 is (a == 0 || a == 1) => Yes  
//    then return  1 


   // BACKWAY (stack exec)

// 5. factorial (1) = 1 /* from base statement*/

// 4. 2 * factorial (1) => 2* 1 = 2    /*  facttorial(2) = 2 */

// 3. 3 * factorial(2) = 3*2 = 6  /* factorial(3) = 6 */

// 2. 4 * factorial (3) = 4 *6  /*factorial(4) = 24 */

// 1. 5 * factorial (4) = 5 * 24 = 120

// function power(a, b) {
//    if (b === 0) return 1;
   
//       return a * power(a, b-1)
   
// }

// // console.log(res);


// // 2. Të shkruhet programi që llogaritë shumën e numrave çift nga rangu i numrave 55 deri 99

// // shuma = 56 + 58 + .... + 98

// let shuma =0

// for(let i= 55; i<99; i++){
// if(i % 2 == 0) shuma+=i;
// }

// // console.log(shuma);

// let programi = (x,y) => {
//    let sum = 0;
//    for(let i =x; i<=y; i++){
//      if(i%2==0){
//        sum+=i
//      }
//    }
//    return sum; 
//  }
 
//  console.log(programi(55,99 ));

   
// // 3. Të shkruhet programi që gjenë numrin më të madh të plotpjestueshëm me 3 dhe 6 nga rangu i numrave 0 deri në 100

// let ok = 0;

// for(let i=0; i <= 100; i++){
//    if(i % 3 == 0 && i % 6 == 0)
//    ok = i;
// }

// // console.log(ok)

// // 1. Të shkruhet programi që llogaritë prodhimin e shumës së numrave çift dhe tek nga 0 deri në n – ku n i jepet si parametër funksionit

// // 1 2 3 4 5 6 7 8 9 10 11 12 ... n
// // Çift: 2 4 6 8 10 ... = shuma: x
// // Tek: 1 3 5 7 9 ... = shuma y
// // Rezultati final: r = x * y


// function prod (n) {
//    let s=0
//    for(let i=0; i<=n; i++){
//       if (i%2==0) {
//          s+=i
//       }
//    }
//    return s;
// }

// // console.log(prod(20))



// // 2. Të shkruhet funksioni që llogaritë prodhimin e numrave të dhënë si argumente – numri i argumenteve nuk është i kufizuar

// // Prodhimi(10,4)
// // Prodhimi(30,3,2)
// // Prodhimi(9,8,9,8,5)    etj.


// function prod (...args){
//    let p =1
//   for(let i=0; i< args.length; i++){
//    p*=args[i]
//   }
//   return p
// }

// // console.log(prod(10,4,2))


// // 3. Të shkruhet programi që llogaritë shumën e elementeve në pozicione (indekse) teke

// // [10, 50, 45, 23, 1,  3,  6,  9, 12]
// //   0     1    2    3    4   5   6   7   8

// // Shuma e elementeve: 50, 23, 3, 9


// let arr= [10, 50, 45, 23, 1,  3,  6,  9, 12]


// function tek (a){
//    let sum = 0;
//    for(let i = 0; i< a.length; i++){
//       if((i+1) % 2 == 0){
//          sum+= a[i];
//       }
//    }
//    return console.log(sum);
// }


// // tek(arr);


// let arr2 =[10, 1, 3,  6,  9, 12]

// function sum(a) {
//    for(let i = 0; i < a.length; i++){
//       if(a[i] % 2 == 0){
//          a[i]*=2
//       }else{
//          a[i]=a[i];
//       }
//    }
//    return arr2
// }

// // console.log(sum(arr2))


// function sum2(a){
//    for(let i = 0; i < a.length; i++){
//       if([i] % 2 == 0 || [i] == 0){
//          a[i]*=2
//       }else{
//          a[i]=a[i];
//       }
//    }
//    return arr2
// }

// console.log(sum2(arr2))


// let a= "Bootcamp";
// let b = [];

// function StrReverse (myString){
//    for(let i=0; i < myString.length; i++){
//    b.unshift(myString[i]);
//    }
//    return b.join("");
// }

// console.log(sum2(arr2))


// classa BankAccount
// properties: avaliable_amount
// methods: bilance, deposit, withdraw


// class BankAccount {
//    //properties: avaliable_amount
//    constructor(available_amount){
//        this.available_amount = available_amount;
//    }
// //methods: bilance, deposit, withdraw
//    balance(){
//       return console.log(this.available_amount);
//    }
   
//    deposit(amount){
//       if(amount <= 0 ) throw "Negative amount is not valid!";
//       console.log(this.available_amount += amount);
//    }

//    withdraw(amount){
//       if(amount > this.available_amount) throw console.log("the required amount is not available, you can withdraw max: " +this.available_amount);
//       console.log(this.available_amount -= amount);
//    }

// }

// // // krijojme objektin nga BankAccount class

// let donaldo_Account = new BankAccount(4400);

// donaldo_Account.balance();
// donaldo_Account.deposit(6600);
// donaldo_Account.withdraw(8000);





// let lacat = [
//    {emri: "esmeraldo", nickname:"belloebono", mosha: 12},
//    {emri: "rexhinaldo", nickname:"pitbull", mosha: 18},
//    {emri: "beni", nickname:"lali", mosha: 14}
// ]
// console.log(lacat.filter(x => x.mosha > 12));






// class ATM{
//    constructor(amount){
//       this.amount = amount;

//    }
// }

// class Card{
//    constructor(bank, amount){
//       this.bank = bank;
//       this.amount= amount;
//    }

//    withdraw(amount){

//       if (amount > this.amount) throw "not enough credit on your  balance"
//       switch(this.bank){
//          case "TEB":
//             this.amount= 
//       }

//    }
// }

donaldo_Account.bialnce();
donaldo_Account.deposit(6600);
donaldo_Account.withdraw(8000);
