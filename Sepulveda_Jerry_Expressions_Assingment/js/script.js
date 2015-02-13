/**
 * Created by Jerry Sepulveda on 2/9/15.
 * SDI Project #2
 * Expressions_Assignment
 */

// I thought this would be a cool way of starting my DPS calculator, being that the user could click ok when ready to begin.

alert("Are you ready to calculate the Damage per Second of your Weapon?");

// I'm setting up my variables for my DPS calculator here.

var MinimumWeaponDamage; //setting up min weapon damage var

var MaximumWeaponDamage; //setting up max weapon damage var

var WeaponSpeed;  //setting up weapon speed var

// I'm setting up my prompts so I can get the users data.

MinimumWeaponDamage = prompt("Please enter the minimum damage of your weapon: ");  //setting up min damage prompt

MaximumWeaponDamage = prompt("Please enter the maximum damage of your weapon: ");  //setting up max weapon damage prompt

WeaponSpeed = prompt("Please enter the speed of your weapon: ");  //setting up weapon speed prompt

// I'm using the console.log to send the weapon data back to the user.

console.log ("You entered the following minimum damage: "+ MinimumWeaponDamage + ".");  //console log with min damage data

console.log ("You entered the following maximum damage: "+ MaximumWeaponDamage + ".");  //console log with max damage data

console.log ("You entered the following weapon speed: "+ WeaponSpeed + ".");  // console log with weapon speed data

//  The Damage Per Second calculation is minimum weapon damage + maximum weapon damage, divided by 2, then divided by the weapon speed.

var DPS; //setting up damage per second var and array

DPS = [MinimumWeaponDamage += MaximumWeaponDamage /2/WeaponSpeed];  //setting up damage per second math and array

console.log (DPS); //setting up console log to display DPS math

alert ("Your damage per second is")  //setting up alert to display message to user

alert (DPS); //setting up alert to display DPS math




