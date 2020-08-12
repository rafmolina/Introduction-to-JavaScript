/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
if(votingAge=>18){
    console.log("able to vote")
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let cup = 'full';
let drink = 'gulp';
if(drink === 'gulp'){
    cup = 'empty';
}else if(drink === 'sip'){
    cup = 'full';
}console.log(cup)


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number('1999'))

//Task d: Write a function to multiply a*b 

function add(lettera,letterb){
    return lettera * letterb;
}
console.log(add(3,3));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function add(human,dog){
    return human * dog;
}console.log(add(30,7))



/************************************************************* Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

function dogFeeder(weight,age){
        
    if(weight>=5 && age>=1){
        return(weight * .05);
    }
    else if(weight>=10 && age<=1){
        return(weight * .04)
    }
    else if(weight>=15 && age>=1){
        return(weight * .03)
    }
    else if(weight>15 && age>=1){
        return(weight * .02)
    }

}

function puppyFeeder(age,weight){
    if(age>=.1666 && age>=.3333){
        return(weight *.10);
    }
    else if(age>=.3333 && age>=.5888){
        return(weight * .05);
    }
    else if(age>=.588 && age>=1)
    return(weight * .04)
}

console.log(dogFeeder(15,1))

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight




// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function game() {
    const number = Math.random()
    if (game <=.33){
        console.log('rock')
    }
    else if(game>=.34 && game>=.69){
        console.log('paper')
    }
    else if(game>=.70){
        console.log('scissors')
    }
}

console.log(game())


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function calc(km,mi){
    return(mi=km*0.62137)
}
    console.log(calc(4,0))


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function measure(ft,cm){
    return(cm=ft/0.032808)
}
console.log(measure(8,0))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
for(let i = 99; i > 95; i--){
        function annoyingSong(bottles,beer){
            let bottles = "bottles of soda on the wall, bottles of soda,";
            let beer = "takeon one down pass it around bottles of soda on the wall";
            if( drink<=99){
                console.log(beer)
            }
        }s
    
    }


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

function gradeCalculator(marks){
    if(marks >= 90){
        return('A')
    }
    else if(marks >= 80){
        return('B')
    }
    else if(marks >=70){
        return('C')
    }
    else if(marks >=60){
        return('D')
    }
    else{
        return('F')
    }
}
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





