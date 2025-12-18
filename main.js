// let orangePrice = 22
// let applePrice = parseFloat("36.14")

// let totalPrice = orangePrice + applePrice

// console.log(totalPrice)


// let first = 0.1
// let second = 0.2

// let sum = first + second

// console.log(parseFloat(sum.toFixed(3)))

// let laptopPrice = 30000
// let discount = 2000
// let tax = 0.1

// laptopPrice -= discount

// console.log(laptopPrice)


// let data = 99

// if (data < 100) {
//     console.log("i will play")
// } else {
//     console.log("i will study")
// }


// data > 100 ? console.log("i will play") : console.log("i will study")

// ARRAYS

// let friends = ["abul", "babul", "cabul", "dabul"]
// let numbers = [45, 23, 78, 90, 11, 9]
// friends.push('ashraful')
// friends.pop()
// friends.shift()
// friends.unshift('rifaz')

// console.log(friends)

// friends.includes('rifaz') ? console.log("he is here") : console.log("he is not here")
// console.log(friends.indexOf('kabul')) 
// console.log(Array.isArray(friends))

// let addBoth = friends.concat(numbers)

// console.log(addBoth)
// console.log(friends.splice(1, 2, 'kabul', 'labul'))



// FOR LOOP

// for (const num of numbers) {
//     console.log('my number is', num)
// }

// for (const friend of friends) {
//     console.log(friend, "is my friend")
// }


// let count = 1
// let total = 0
// while (count <= 10) {
//     console.log(count);
//     total += count;
//     console.log(total);
//     count++
// }

// console.log("final total", total)



// TASKS 1

// let i = 0;
// while (i < 60) {
//     console.log('impossible task - ', i + 1);
//     i++
// }

// for (let i = 0; i < 60; i++) {
//     console.log('impossible task - ', i + 1);
// }


// TASKS 2
    // SUBTASK 1

// let num = 60
// let odd = 0

// while (num <=100) {
//     num % 2 === 0 ? (odd += num) : '';
//     num++
// }

// console.log(odd)

// let num = 206
// let even = 0

// while (num < 311) {
//     num % 2 ===0 ? even += num : '';
//     num++
// }

// console.log(even);

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let reverseColors = []

// for (let i = colors.length - 1; i >=0; i--) {
//     reverseColors.push(colors[i])
// }

// console.log(reverseColors);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let even = []

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         even.push(numbers[i])
//     }
// }

// console.log(even);

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let numString = ''

// for(number of numbers) {
//     numString +=number + ''
// }

// console.log(numString); 

// const statement = 'I am a hard working person'
// const spiltedStatement = statement.split('-')
// console.log(spiltedStatement);


const laptop = {
    name: 'macbook',
    price: 130000,
    brand: 'apple',
    warrentyAvailable: true,
    'variant': ['chinese, australian, american, canadian']
}

// console.log(laptop.variant);
// let num = laptop['variant']
// console.log(num);

// const lapKeys = Object.keys(laptop)
// console.log(lapKeys);

// const lapValues = Object.values(laptop)
// console.log(lapValues);


// for (const prop in laptop) {
//     console.log(laptop[prop]);
    
// }