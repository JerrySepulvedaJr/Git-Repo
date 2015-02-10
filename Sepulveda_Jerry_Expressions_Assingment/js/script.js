/**
 * Created by Jerry Sepulveda on 2/9/15.
 * SDI Project #2
 * Expressions_Assignment
 */

// I thought this would be a cool way of starting my DPS calculator, being that the user could click ok when ready to begin.

alert("Are you ready to calculate the Damage per Second of your Weapon?");

// I'm setting up my variables for my DPS calculator here.

var MinimumWeaponDamage;

var MaximumWeaponDamage;

var WeaponSpeed;

// I'm setting up my prompts so I can get the users data.

MinimumWeaponDamage = prompt("Please enter the minimum damage of your weapon: ");

MaximumWeaponDamage = prompt("Please enter the maximum damage of your weapon: ");

WeaponSpeed = prompt("Please enter the speed of your weapon: ");

// I'm using the console.log to send the weapon data back to the user.

console.log ("You entered the following minimum damage: "+ MinimumWeaponDamage + ".");

console.log ("You entered the following maximum damage: "+ MaximumWeaponDamage + ".");

console.log ("You entered the following weapon speed: "+ WeaponSpeed + ".");

//  The Damage Per Second calculation is minimum weapon damage + maximum weapon damage, divided by 2, then divided by the weapon speed.

var DPS;

DPS = [MinimumWeaponDamage + MaximumWeaponDamage / 2 / WeaponSpeed]

console.log (DPS);

prompt (DPS)