// ||||||||||||||||||||||||||||||||||||| USER INPUT & CONDITIONAL STATEMENT (Ch # 9 - 11) |||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var city = prompt("Enter city name:");
// if(city === "karachi"){
//     alert("Welcome to city of lights")
// }

// ***************************************** Question # 02 *****************************************

// var gender = prompt("Enter your gender:");
// if(gender === "male"){
//     alert("Good Morning Sir.")
// }if(gender === "female") {
//     alert("Good Morning Ma'am.")
// }

// ***************************************** Question # 03 *****************************************

// var color = prompt("Enter color of road traffic signal:");
// if(color === "red"){
//     alert("Must Stop")
// }if(color === "yellow"){
//     alert("Ready to move")
// }if(color === "green"){
//     alert("Move now")
// }

// ***************************************** Question # 04 *****************************************

// var fuel = prompt("Enter remaining fuel of car in litres");
// if(fuel < 0.25 + "litres"){
//     alert("Please refill the fuel in your car");
// }

// ***************************************** Question # 05 *****************************************

//a

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//c

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//e

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//f

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// ***************************************** Question # 06 *****************************************

// var subject1 = +prompt("Enter your marks of first subject:");
// var subject2 = +prompt("Enter your marks of second subject:");
// var subject3 = +prompt("Enter your marks of third subject:");
// var total = +prompt("Enter total marks:");

// var marksObtained = subject1 + subject2 +subject3;

// document.write("Total marks: " + total + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");

// var percentage = (marksObtained / total) * 100;
// document.write("Percentage: " + percentage + "% <br>")

// if(percentage >= 80){
//     document.write("Grade: A-one" + "<br>" + "Remarks: Excellent");
// }if(percentage >= 70 && percentage < 80){
//     document.write("Grade: A" + "<br>" + "Remarks: Good");
// }if(percentage >= 60 && percentage < 70){
//     document.write("Grade: B" + "<br>" + "Remarks: You need to improve");
// }if(percentage < 60 && percentage !== 60){
//     document.write("Grade: Fail" + "<br>" + "Remarks: Sorry");
// }

// ***************************************** Question # 07 *****************************************

// var secretNum = 7;
// var userInput = +prompt("Guess the correct number:\n(Ranging 1 to 10)");

// if(userInput === secretNum){
//     alert("Bingo! Correct answer");
// }if(userInput === ++secretNum){
//     alert("Close enough to the correct answer");
// }if(userInput === 6){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Wrong answer");
// }

// ***************************************** Question # 08 *****************************************

// var num = +prompt("Enter a number:");
// if(num % 3 === 0){
//     alert("The number is divisible by 3")
// }else{
//     alert("The number isn't divisible by 3")
// }

// ***************************************** Question # 09 *****************************************

// var num = +prompt("Enter a number:");
// if(num % 2 === 0){
//     alert("Even number");
// }else{
//     alert("Odd number");
// }

// ***************************************** Question # 10 *****************************************

// var temp = +prompt("Enter today's temperature:");
// if(temp >= 40){
//     document.write("It is too hot outside.");
// }if(temp >= 30 && temp < 40){
//     document.write("The Weather today is Normal.");
// }if(temp >= 20 && temp < 30){
//     document.write("Today's Weather is cool.");
// }if(temp >= 10 && temp < 20){
//     document.write("OMG! Today's weather is so Cool.");
// }

// ***************************************** Question # 11 *****************************************

// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var opr = prompt("Select an operation(+, -, *, /, %)");
// var result;

// if(opr == "+"){
//     result = num1 + num2;
//     document.write("Addition of " + num1 + " and " + num2 + " is " + result);
// }if(opr == "-"){
//     result = num1 - num2;
//     document.write("Subtraction of " + num1 + " and " + num2 + " is " + result);
// }if(opr == "*"){
//     result = num1 * num2;
//     document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);
// }if(opr == "/"){
//     result = num1 / num2;
//     document.write("Division of " + num1 + " by " + num2 + " is " + result);
// }if(opr == "%"){
//     result = num1 % num2;
//     document.write("Modulus of " + num1 + " and " + num2 + " is " + result);
// }

// |||||||||||||| IF ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Ch # 12 - 13) ||||||||||||||||||||

// ***************************************** Question # 1 *****************************************

// var input = prompt("Enter your value:");
// if(input >= "A" && input <= "Z"){
//     alert("UPPERCASE Letter");
// }if(input >= "a" && input <= "z"){
//     alert("Lowercase Letter");
// }if(input >= "0" && input <= "9"){
//     alert("It's a Number");
// }

// ***************************************** Question # 2 *****************************************

// var int1 = +prompt("Enter first integer:");
// var int2 = +prompt("Enter second integer:");
// if(int1 > int2){
//     alert("The larger integer is " + int1);
// }else if(int1 < int2){
//     alert("The larger integer is " + int2)
// }else if(int1 === int2){
//     alert("Both integers are equal")
// }else{
//     alert("Invalid value");
// }

// ***************************************** Question # 3 *****************************************

// var num = +prompt("Enter a number: " + "\n" + "Note: The number can be +ve/-ve or zero(0).")
// if(num > 0){
//     alert("Number is Positive");
// }else if(num < 0){
//     alert("Number is Negative");
// }else if(num === 0){
//     alert("Number is Zero");
// }else{
//     alert("Invalid Number");
// }

// ***************************************** Question # 4 *****************************************

// var ch = prompt("Enter a Character:");
// if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" || ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
//     alert("It is True!")
// }else{
//     alert("It is False.")
// }

// ***************************************** Question # 5 *****************************************

// var orgPwd = ("abc_123");
// var pwd = prompt("Enter your password:");

// if(pwd === ""){
//     alert("Please enter your password");
// }else if(pwd == orgPwd){
//     alert("Correct! The password you entered matches the original password");
// }else {
//     alert("Incorrect password");
// }

// ***************************************** Question # 6 *****************************************

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else {
// greeting = "Good evening";
// }

// ***************************************** Question # 7 *****************************************

// var time = +prompt("Enter your time")
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon!");
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening!");
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night!")
// }

// ||||||||||||||||||||||||||||||||||||| ARRAY (Ch # 14 - 16) |||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 1 *****************************************

// var stdName = [];

// ***************************************** Question # 2 *****************************************

// var stdName = new Array();

// ***************************************** Question # 3 *****************************************

// var wwe = ["Batista","Randy Ortan","Triple H","Kane"]

// ***************************************** Question # 4 *****************************************

// var num = [0,1,2,3,4,5,6,7,8,9];

// ***************************************** Question # 5 *****************************************

// var boolean = [true,false,NaN,undefined];

// ***************************************** Question # 6 *****************************************

// var mixed = ["OAS",23,true,];

// ***************************************** Question # 7 *****************************************

// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
// for(var i = 0; i<qualification.length; i++){
//     document.write(qualification[i] + "<br>");
// }

// ***************************************** Question # 8 *****************************************

// var stdName = ["Siddiqui","Mirza","Sheikh"] 
// var score = [425,450,475] 
// var total = 500;
// var percent1 = (score[0] / total) * 100;
// var percent2 = (score[1] / total) * 100;
// var percent3 = (score[2] / total) * 100;
// document.write("Score of Siddiqui is " + score[0] + ". Percentage: " + percent1 + "% <br>")
// document.write("Score of Mirza is " + score[1] + ". Percentage: " + percent2 + "% <br>")
// document.write("Score of Sheikh is " + score[2] + ". Percentage: " + percent3 + "% <br>")

// ***************************************** Question # 9 *****************************************

//a

// var color = ["Red","Black","Blue","Green","Pink"];
// console.log("Color Array: " + color + "<br>");

//b

// var userColor = prompt("Enter your color which you want to add at start of Array." );
// color.unshift(userColor);
// document.write("Array after color addition at start: " + color + "<br>");

//c

// var userColor = prompt("Enter your color which you want to add at the end of Array." );
// color.push(userColor);
// document.write("Array after color addition at the end: " + color + "<br>");

//d

// color.shift();
// document.write("Array after color removal from start: " + color + "<br>");

//e

// color.pop();
// document.write("Array after color removal from end: " + color + "<br>");

//f

// var userColor = prompt("Enter your color which you want to add in Array." );
// var userIndex = +prompt("Enter index number: ");
// color.push(userColor[userIndex]);
// console.log("Array after color addition: " + color + "<br>");

//g

// var userColor = prompt("Enter your color which you want to remove from Array." );
// var userIndex = +prompt("Enter index number: ");
// color.pop(userColor[userIndex]);
// console.log("Array after color removal: " + color + "<br>");

// ***************************************** Question # 10 *****************************************

// var stdScore = [320,230,480,120];
// document.write("Scores of Students: " + stdScore + "<br>");
// stdScore.sort();
// document.write("Ordered Scores of Students: " + stdScore);

// ***************************************** Question # 11 *****************************************

// var cities = ["Karachi","Islamabad","Quetta","Lahore","Multan","Hyderabad"];
// document.write("Cities list:<br>" + cities + "<br> <br>");
// var selCities = [];
// selCities.push(cities[0]);
// selCities.push(cities[2]);
// selCities.push(cities[4]);
// document.write("Selected cities list: <br>" + selCities)

// ***************************************** Question # 12 *****************************************

// var arr = ["This"," is "," my "," cat "];
// document.write("Array: <br>" + arr + "<br> <br>");
// var str = arr.join(" ");
// document.write("String: <br>" + str);

// ***************************************** Question # 13 *****************************************

// var dev = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("Devices: <br>" + dev + "<br> <br>");
// document.write("Out: <br>" + dev[0] + "<br>");
// document.write("Out: <br>" + dev[1] + "<br>");
// document.write("Out: <br>" + dev[2] + "<br>");
// document.write("Out: <br>" + dev[3] + "<br>");

// ***************************************** Question # 14 *****************************************

// var dev = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("Devices: <br>" + dev + "<br> <br>");
// document.write("Out: <br>" + dev[3] + "<br>");
// document.write("Out: <br>" + dev[2] + "<br>");
// document.write("Out: <br>" + dev[1] + "<br>");
// document.write("Out: <br>" + dev[0] + "<br>");

// ***************************************** Question # 15 *****************************************

// var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write(phone);