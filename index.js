//console.log("oi")
//var clima = "quente"
//console.log(clima)

//declaração de variavel
//var name = "jhon"

//agrupamento de declarações
//let age, ishuman
//age = 19
//isHuman = true

//multiplos argumentos na função
//console.log (name, age, isHuman)

//escrita de testo + variavel/ contenação
//console.log ('o ' + name + ' tem ' + age + ' anos.')
//ou interpolar:
//console.log (`o ${name} tem ${age} anos.`) 

//object

//const person = {
    //name: 'jon',
    //age: 20,
   // wheight: 72.30,
    //isAdimin: true
//}
//console.log (person.age)
 //ou
 //console.log (`jon ${person.wheight}kg com ${person.age}`)

 //Array
 //const animals = [
   // 'lion',
   // 'tiger',
   // 'fish'
 //]

//acessar valores do array
//console.log (animals[0])


//Exercicio 

//1-var nome = 'weight'
//2-string
//3-
//var name, age, stars, isSubcribed
//name = 'jhon'
//age = 19
//stars = 70
//isSubcribed = false
//console.log (name)
//4- 
//let student = {
   // name: 'jhon',
   // age: 19,
   // stars: 70,
   // isSubcribed: false,
//}
//console.log (`${student.name } de idade ${student.age} pesa ${student.stars}
//kg`)
//5-6-7-

//const student = {
//    name:'mike',
//}

//const students = [
//    'jhon',
//    student,
//     '17',
//    '72,30',
//     'false'
//]
//console.log (students[1])

//Funções/function
//function sopposedpoem() {
   // console.log("assim como o moir do astros se curva na presença da dama lua eu me curvo diante da tua beleza")
   // console.log('o folego divino o maior ato de amor, dizer que foi o maior ato de amor da umanidade seria uma erezia pois a humanida ja mas sera capas de entender o que entre o ifinito sem pedir nada')
//}

//sopposedpoem()

//fuction expression 
//const sun = function(number1, number2) {
//   let total = number1 + number2
//    return total
//}

//let number1 = 34
//let number2 = 25
//sun(4, 6)
//console.log(`o numero 1 é ${number1}`)
//console.log(`a soma é ${sun(number1, number2)}`)
 //EX2:
//function fazersuco(fruta1, fruta2) {
//    return (fruta1 + fruta2)
// }

// const copo = fazersuco('banana', 'maça')

// console.log(copo)

//arrow fuction
//const sayMyName = () => {

//  console.log('mike')
//}

//callback function
function sayMyName(name) {
   console.log('ants de executar a funcao callback')
   
   name()

   console.log('depois de executar a callback')
}

sayMyName(
   () => {
      console.log('estou em uma callback')
   }
)