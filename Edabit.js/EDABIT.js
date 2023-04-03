//Hello
function hello() {
	return "hello edabit.com"
}

//Addition
function addition(a, b) {
	return a+b
}

//Area of triangle
function triArea(base, height) {
	return(base * height) / 2
}

//Addition
function addition(num) {
	return num+1
}

//Convert years to days 
function calcAge(age) {
	return age*365
}

//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
	return (length+width)*2
}

//return something to me 
function giveMeSomething(a) {
	return "something "+a
}

//Convert minutes into secondes
function convert(minutes) {
	return minutes*60
}

//secondes into hours
function howManySeconds(hours) {
	return hours*60*60
}

//Return the first element is an array
function getFirstValue(array) {
	return array[0]
}

//Basketball Points
function points(twoPointers, threePointers) {
	return twoPointers*2 +threePointers*3
}

//Power calculator
function circuitPower(voltage, current) {
	return voltage*current
}

//Maximum edge of a triangle
function nextEdge(side1, side2) {
	return (side1 + side2)-1
}

// Less of equal to zero 
function lessThanOrEqualToZero(num) {
	if(num <= 0)
		return true;
	else
		return false;
}

//Sum of polyon angles
function sumPolygon(n) {
	return (n-2) *180
}

//Basketball points
function points(twoPointers, threePointers) {
	return twoPointers * 2 + threePointers * 3;
}

//Basic variable assignment
function nameString(name){
	return name+"Edabit"
	}

//Less than 100 ?
function lessThan100(a, b) {
	if (a + b >= 100){
		return false
	} else {
		return true
	}
}

//Buggy code part 5
function printArray(number) {
	var newArray = [];
  
	for(var i = 1; i <= number;i++) {
	  newArray.push(i);
	}
  
	return newArray;
  }

// Buggy code part 7
function swap(a, b) {
	t = a // Store value of `a` in a temporary variable `t`
		a = b // Store value of `b` in `a`
		b = t // Store value of `t` in `b`
		return [a, b]
	}

// The farm problem
function animals(chickens, cows, pigs) {
	chickens *= 2;
	cows *= 4;
	pigs *= 4;
	return chickens + cows + pigs;
}

// Using the && operator
function and(a, b) {
	return a && b
}

// Are the number Equal?
function isSameNum(num1, num2) {
	if (num1 === num2){
			return true;
		}else{
			return false;
		}
	}

// Football points
function footballPoints(wins, draws, losses) {
	return (wins * 3 ) + (draws * 1) + (losses * 0);
}

// Fix the expression
function isSeven(x) {
	return x === 7;
}

// Equality check
function checkEquality(a, b) {
	return a === b
 }

 // Profitable Gamble
 function profitableGamble(prob, prize, pay) {
	return prob*prize > pay;
}