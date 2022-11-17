// // power function 

// function power (a, b){
//    let c= a**b;
//    console.log(c); 
// }


// power(2,3);


function factorial  
function factorial (a){
      if(a == 0 || a == 1){
    return 1;
 } else{
     return a *factorial (a-1);
        }
}

console.log(factorial(5));


RUN factorial(5)

1 is (a == 0 || a == 1) => No  

   then return a *factorial (5-1);  /*a=4 */
 ///           5 * factorial (4) 
2 is (a == 0 || a == 1) => No  
   then return  a *factorial (4-1);  /*a=3 */
///             4 * factorial (3) 

3 is (a == 0 || a == 1) => No  
   then return  a *factorial (3-1);  /*a=2 */
   ///             3 * factorial (2) 

4 is (a == 0 || a == 1) => No  
   then return  a *factorial (2-1);  /*a=1 */
 ///             2 * factorial (1)   

5 is (a == 0 || a == 1) => Yes  
   then return  1 


   // BACKWAY (stack exec)

5. factorial (1) = 1 /* from base statement*/

4. 2 * factorial (1) => 2* 1 = 2    /*  facttorial(2) = 2 */

3. 3 * factorial(2) = 3*2 = 6  /* factorial(3) = 6 */

2. 4 * factorial (3) = 4 *6  /*factorial(4) = 24 */

1. 5 * factorial (4) = 5 * 24 = 120

function power(a, b) {
   if (b === 0) return 1;
   
      return a * power(a, b-1)
   
}

// console.log (power(4, 3));


// 1. Të shkruhet programi që llogaritë ndryshimin e shumës së numrave çift dhe tek nga 1 deri në 10

// 1 2 3 4 5 6 7 8 9 10
// Çift: 2 4 6 8 10 = shuma: 30
// Tek: 1 3 5 7 9 = shuma 25
// Rezultati final: 30 – 25 = 5


// function dif (a){
   let c = 0;
   let t = 0;
   let res
   for (let i = 0; i <= 10 ; i++){
   if(i%2 == 0)
      c+=i
   else
    t+=i
}
 res = c-t 

// console.log(res);


// 2. Të shkruhet programi që llogaritë shumën e numrave çift nga rangu i numrave 55 deri 99

// shuma = 56 + 58 + .... + 98

let shuma =0

for(let i= 55; i<99; i++){
if(i % 2 == 0) shuma+=i;
}

// console.log(shuma);

   
// 3. Të shkruhet programi që gjenë numrin më të madh të plotpjestueshëm me 3 dhe 6 nga rangu i numrave 0 deri në 100

let ok = 0;

for(let i=0; i <= 100; i++){
   if(i % 3 == 0 && i % 6 == 0)
   ok = i;
}

// console.log(ok)

// 1. Të shkruhet programi që llogaritë prodhimin e shumës së numrave çift dhe tek nga 0 deri në n – ku n i jepet si parametër funksionit

// 1 2 3 4 5 6 7 8 9 10 11 12 ... n
// Çift: 2 4 6 8 10 ... = shuma: x
// Tek: 1 3 5 7 9 ... = shuma y
// Rezultati final: r = x * y


function prod (n) {
   let s=0
   for(let i=0; i<=n; i++){
      if (i%2==0) {
         s+=i
      }
   }
   return s;
}

// console.log(prod(20))



// 2. Të shkruhet funksioni që llogaritë prodhimin e numrave të dhënë si argumente – numri i argumenteve nuk është i kufizuar

// Prodhimi(10,4)
// Prodhimi(30,3,2)
// Prodhimi(9,8,9,8,5)    etj.


function prod (...args){
   let p =1
  for(let i=0; i< args.length; i++){
   p*=args[i]
  }
  return p
}

// console.log(prod(10,4,2))


// 3. Të shkruhet programi që llogaritë shumën e elementeve në pozicione (indekse) teke

// [10, 50, 45, 23, 1,  3,  6,  9, 12]
//   0     1    2    3    4   5   6   7   8

// Shuma e elementeve: 50, 23, 3, 9


let arr= [10, 50, 45, 23, 1,  3,  6,  9, 12]


function tek (a){
   let sum = 0;
   for(let i = 0; i< a.length; i++){
      if((i+1) % 2 == 0){
         sum+= a[i];
      }
   }
   return console.log(sum);
}


// tek(arr);


let arr2 =[10, 1, 3,  6,  9, 12]

function sum(a) {
   for(let i = 0; i < a.length; i++){
      if(a[i] % 2 == 0){
         a[i]*=2
      }else{
         a[i]=a[i];
      }
   }
   return arr2
}

// console.log(sum(arr2))


function sum2(a){
   for(let i = 0; i < a.length; i++){
      if([i] % 2 == 0 || [i] == 0){
         a[i]*=2
      }else{
         a[i]=a[i];
      }
   }
   return arr2
}

// console.log(sum2(arr2))





function factorial  
function factorial (a){
      if(a == 0 || a == 1){
    return 1;
 } else{
     return a *factorial (a-1);
        }
}

console.log(factorial(5));

factorial (5)
5*21*3+8992*factp




