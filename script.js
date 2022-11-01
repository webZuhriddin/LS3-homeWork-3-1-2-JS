
// ++ -iteratciya --> +1 degani
// -- -iteratciya --> -1 degani

// __________________________________________________________________________________________________


// var a = 4 
// a++
// console.info(a)

// __________________________________________________________________________________________________

// var i = 0

// console.info(i++) /* postriks */
// console.info(i)

// console.info(++i) /* prefiks */
// console.info(i)

// __________________________________________________________________________________________________


// CIKLLAR___________________________________________________________________________________________________

// while - shart true qaytarganda tanasiga kiradi

// var i = 0
// while(i <= 10) {
//     console.info(i)
//     i++
// }


// do {
//     var num = +prompt('5 sonini kiriting')
// }while(num !=5) { /* True qaytarsa do ga qaytadi */
//     console.info('barakalla')
// }

// for(interator; shart; qadam){}
// for(let i = 0; i < 10; i++){
//     console.info(i)
// }


// if(){
//     else{

//     }
// }


// ? - true qaytarsa ; :-false qaytarsa
   
// let number = +prompt('Son kiriting:')
// number = !isNaN(number) && number > 0 ? number : number =7 
// console.info(number)



// FOCTARIAL_______________________________________________________________________________________________

// let num = 1

// for(let i = 1; i <= 5; i++) {
//     console.info('oldin: ', num)

//     num = num * i

//     console.info ('keyingi: ', num )
// }

// console.info(num)

// LS3-HOMEWORK-1__________________________________________________________________________________________

do{var son = +prompt('Son kiriting:')
}while(son < 0 || isNaN(son) == true){
}
var daraja = +prompt('Darajasi: ')
daraja = !isNaN(daraja) && daraja > 0 ? daraja : daraja = 2  
alert(son**daraja)


// LS3-HOMEWORK-2__________________________________________________________________________________________

do{var zina = +prompt('Zina soni:')
}while(zina <= 0)
 
zina = !isNaN(zina) ? zina : zina = 4

do{var belgi = prompt('Zina belgisi:')
}while(belgi =='')

do{var belgi3 = prompt('Zinaning oxirgi belgisi:')
}while(belgi3 ==''){
    console.info(belgi3)
}

for(let i = 1; i <= zina; i++){
    belgi3 = belgi +belgi3
    console.info(belgi3)
}