// Hero RPG Game: Part 2

const prompt = require('prompt-sync')({sigint: true});

class Character{
constructor(health, ATKPower){
    this.health = health;
    this.ATKPower = ATKPower;
    this.isConfused = false;
    this.doubledAttack = false;
}

lifeStatus(){
    return `${this.name} has ${this.health} \u2764  health`
}

characterStats(){
return `
${this.name} has ${this.health} \u2764  health and ${this.ATKPower} \u2694\uFE0F  attack power.`;
}

attack(enemy){
//? Condition for game to keep going
while(this.health > 0 && enemy.health > 0){

let heroStats = this.characterStats();
let enemyStats = enemy.characterStats();
//* ----------------------------------------------------------------------------------------------
//? ITEMS FOR GAME:
//*                +7hp                  -50% accuracy for 1 turn (enemy)
let items = ['Cooked Trout\uD83D\uDC1F', 'Confuse Spell \u2697\uFE0F']
//* ----------------------------------------------------------------------------------------------
//? PROMPT MENU:
console.log(`${heroStats} ${enemyStats}

What do you want to do?
1. fight ${enemy.name}
2. eat ${items[0]} or use ${items[1]}
3. do nothing
4. flee
>`)
let rawInput = prompt()
//* ----------------------------------------------------------------------------------------------
// PRINCESS ADDY SPECIAL POTION VS UNDYING PIRATE ZOMBIE
if (rawInput == "1"){
if (this.name == "Princess Addy\uD83D\uDC51" && enemy.name == "Zombie Pirate \u2620 "){
console.log(`${this.name} uses a special potion from the kingdom: ${weapons[2]}`);
enemy.health = 0
console.log(`*poof*`);
console.log(`The potion turns the ${enemy.name} to dust.`);
console.log(`${enemy.name} is dead.`)
console.log(`You collect 500 Coins\uD83D\uDCB0`);
return;
}
// CHECKS TO SEE IF CHARACTER IS ELF WIZARD ARIANWYN & Gives Magic Attacks
if (this.name == "Elf Wizard Arianwyn\uD83E\uDDDD\u200D"){
let math50 = Math.floor(Math.random() * 100)
    if(math50 < 50){
        console.log(`${this.name} uses Fire Wave\uD83D\uDD25`);
        if(enemy.name == "Zombie Pirate \u2620 "){
            console.log(`${enemy.name} is vulnerable to fire`);
            enemy.health = 0
            console.log(`${enemy.name} is dead.`)
            console.log(`You collect 500 Coins\uD83D\uDCB0`);
            return;
        }
    } else {
        console.log(`${this.name} uses Water Wave\uD83C\uDF0A`);
    }
}
// MONK OMAD INCREASES 2HP 20% of the time:
if (this.name == "Monk Omad\uD83E\uDDD8\u200D"){
let math20 = Math.floor(Math.random() * 100)
if (math20 < 20){
    console.log(`${this.name} has been healed 2 \u2764  health`);
    this.health += 2;
    this.lifeStatus()
}
}

//* HERO ATTACKS ENEMY - CHECKS IF SHADE IS ENEMY 
if (enemy.name !== "Shade\uD83C\uDF0C"){
let math17 = Math.floor(Math.random() * 100)
if (math17 < 17){
    this.doubledAttack = true;
    console.log(`Attack Power has been doubled!`);
}
if (this.weapon == 'Dragon Claws\uD83D\uDC09\uD83D\uDD25'){ // DRAGON CLAWS ATTACK TWICE
    console.log(`${this.name} is wielding ${this.weapon}`);
    console.log(`${this.weapon} increase attack speed 2x:`);
    if (this.doubledAttack){
    enemy.health -= this.ATKPower * 2; // use doubled attack power
    console.log(`You do ${this.ATKPower * 2} \u2694\uFE0F  damage to ${enemy.name}.`)
    enemy.health -= this.ATKPower * 2; // use doubled attack power
    console.log(`You do ${this.ATKPower * 2} \u2694\uFE0F  damage to ${enemy.name}.`)
    this.doubledAttack = false; // reset the attack
} else {
    enemy.health -= this.ATKPower; // use regular attack power
    console.log(`You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
    enemy.health -= this.ATKPower; // use regular attack power
    console.log(`You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
    if (enemy.health <= 0){
        console.log(`${enemy.name} is dead.`)
        if (enemy.name == 'Wizard Lucien\uD83E\uDDD9\u200D'){
            console.log(`You collect 700 Coins\uD83D\uDCB0`);
        } else if (enemy.name == 'Grubfoot the Goblin'){
            console.log(`You collect 200 Coins\uD83D\uDCB0`)
        } else if (enemy.name == 'Mudknuckles'){
            console.log(`You collect 200 Coins\uD83D\uDCB0`);
        } else {
            console.log(`You collect 500 Coins\uD83D\uDCB0`);
        }
    }
}
} else {
    if (this.doubledAttack){
        enemy.health -= this.ATKPower * 2; // use doubled attack power
        console.log(`You do ${this.ATKPower * 2} \u2694\uFE0F  damage to ${enemy.name}.`)
        this.doubledAttack = false; // reset the attack
    } else {
        enemy.health -= this.ATKPower; // use regular attack power
        console.log(`You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
    }
    if (enemy.health <= 0){
        console.log(`${enemy.name} is dead.`)
        if (enemy.name == 'Wizard Lucien\uD83E\uDDD9\u200D'){
            console.log(`You collect 700 Coins\uD83D\uDCB0`);
        } else if (enemy.name == 'Grubfoot the Goblin'){
            console.log(`You collect 200 Coins\uD83D\uDCB0`)
        } else if (enemy.name == 'Mudknuckles'){
            console.log(`You collect 200 Coins\uD83D\uDCB0`);
        } else {
            console.log(`You collect 500 Coins\uD83D\uDCB0`);
        }
    }
}
} else {
let math10 = Math.floor(Math.random() * 100)
if(math10 < 10){
enemy.health -= this.ATKPower
console.log(`
You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
if (enemy.health <= 0){
console.log(`${enemy.name} is dead.`)
if (enemy.name == 'Wizard Lucien\uD83E\uDDD9\u200D'){
    console.log(`You collect 700 Coins\uD83D\uDCB0`);
} else if (enemy.name == 'Grubfoot the Goblin'){
    console.log(`You collect 200 Coins\uD83D\uDCB0`)
} else if (enemy.name == 'Mudknuckles'){
    console.log(`You collect 200 Coins\uD83D\uDCB0`);
} else {
    console.log(`You collect 500 Coins\uD83D\uDCB0`);
}
}
} else {
console.log(`${enemy.name} seems to be untouchable.`);
console.log(`Rumors say ${enemy.name} takes damage, but rarely.`);
console.log(`Don't give up!`);
} 
} // end if enemy is Shade
} // end of rawInput 1 (fight)
//* ----------------------------------------------------------------------------------------------
else if (rawInput == "2"){
    console.log(`Would you like to eat ${items[0]} (1) or use a ${items[1]} (2)`);
    let choice1or2 = prompt()
    if(choice1or2 == "1"){
        this.health += 7;
        console.log(`${this.name} eats the ${items[0]} and increase 7 \u2764  health`);
        console.log(`${this.lifeStatus()}`);
    } else if (choice1or2 == "2"){
        console.log(`${this.name} uses a ${items[1]}  on ${enemy.name} and decreased their accuracy by 50%`);
        enemy.isConfused = true;
    } 
    if(enemy.isConfused) {
        console.log(`${enemy.name} is confused.\uD83D\uDE35`);
        // hero attacks goblin
        enemy.health -= this.ATKPower
        console.log(`You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
        if (enemy.health <= 0){
        console.log(`${enemy.name} is dead.`)
        if (enemy.name == 'Wizard Lucien\uD83E\uDDD9\u200D'){
            console.log(`You collect 700 Coins\uD83D\uDCB0`);
        } else if (enemy.name == 'Grubfoot the Goblin'){
            console.log(`You collect 200 Coins\uD83D\uDCB0`)
        } else if (enemy.name == 'Mudknuckles'){
            console.log(`You collect 200 Coins\uD83D\uDCB0`);
        } else {
            console.log(`You collect 500 Coins\uD83D\uDCB0`);
        }
        }
    } 
} // end of rawInput 2 (items)
//* ----------------------------------------------------------------------------------------------
else if (rawInput == "3"){

} // end of rawInput 3 (do nothing)
else if (rawInput == "4"){
    console.log(`${this.name} quickly puts on ${armor[2]}`);
    console.log(`Good luck catching me ${enemy.name}.`);
    return;
} // end of rawInput 4 (flee)
else{
    console.log(`Invalid input ${rawInput}`);
}

//* ----------------------------------------------------------------------------------------------
//? CONFUSION IF STATEMENT & ARMOR -:
if (enemy.health > 0 && enemy.isConfused == false){
    if(enemy.name !== 'Wizard Lucien\uD83E\uDDD9\u200D'){
    if(this.armor == 'Rune Full Body Armor\uD83D\uDEE1\uFE0F '){
        let Math50 = Math.floor(Math.random() * 100)
        if(Math50 < 50){
        console.log(`${this.armor} protects ${this.name}`);
        console.log(`${this.name} takes no damage.`);
        } else {
            console.log(`${this.armor} failed to protect ${this.name}`);
            // Enemy attacks hero
            this.health -= enemy.ATKPower;
            console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`);
        }
    } else if(this.armor == 'Graceful Cloak\uD83E\uDDB8'){
        let Math25 = Math.floor(Math.random() * 100)
        if(Math25 < 25){
        console.log(`${this.armor} protects ${this.name}`);
        console.log(`${this.name} takes no damage.`);
        } else {
            console.log(`${this.armor} failed to protect ${this.name}`);
            // Enemy attacks hero
            this.health -= enemy.ATKPower;
            console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`);
        }
    } else {
        console.log(`${this.armor} failed to protect ${this.name}`);
        // Enemy attacks hero
        this.health -= enemy.ATKPower
        console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
        }
    } else {
        console.log(`${enemy.name} uses Soul Split\u27B0`);
            if (this.armor == 'Rune Full Body Armor\uD83D\uDEE1\uFE0F '){
            let Math50 = Math.floor(Math.random() * 100)
            if(Math50 < 50){
            console.log(`${this.armor} protects ${this.name}`);
            console.log(`${this.name} takes no damage.`);
            } else {
            console.log(`${this.armor} failed to protect ${this.name}`);
            this.health -= enemy.ATKPower
            console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
            console.log(`Soul Split steals 1 \u2764  health`);
            enemy.health += 1;
            }
        } else if (this.armor == 'Graceful Cloak\uD83E\uDDB8'){
            let Math25 = Math.floor(Math.random() * 100)
            if(Math25 < 25){
            console.log(`${this.armor} protects ${this.name}`);
            console.log(`${this.name} takes no damage.`);
            } else {
            console.log(`${this.armor} failed to protect ${this.name}`);
            this.health -= enemy.ATKPower
            console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
            console.log(`Soul Split steals 1 \u2764  health`);
            enemy.health += 1;
            }
        }
    } 
    if (this.health <= 0){
        console.log("You are dead.")
    }
    } else if (enemy.health > 0 && enemy.isConfused == true){
    const randomNumber50 = Math.floor(Math.random() * 100);
        if (randomNumber50 < 50){
            console.log(`${enemy.name} missed their attack.`);
        } else if (randomNumber50 >= 50){
            console.log(`${enemy.name} hits their attack despite being confused.`);
            if (enemy.name !== "Wizard Lucien\uD83E\uDDD9\u200D"){
            this.health -= enemy.ATKPower;
            console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`);
            } else {
            console.log(`${enemy.name} uses Soul Split\u27B0`);
                if (this.armor == 'Rune Full Body Armor\uD83D\uDEE1\uFE0F '){
                let Math50 = Math.floor(Math.random() * 100)
                if(Math50 < 50){
                console.log(`${this.armor} protects ${this.name}`);
                console.log(`${this.name} takes no damage.`);
                } else {
                console.log(`${this.armor} failed to protect ${this.name}`);
                this.health -= enemy.ATKPower
                console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
                console.log(`Soul Split steals 1 \u2764  health`);
                enemy.health += 1;
                }
            } else if (this.armor == 'Graceful Cloak\uD83E\uDDB8'){
                let Math25 = Math.floor(Math.random() * 100)
                if(Math25 < 25){
                console.log(`${this.armor} protects ${this.name}`);
                console.log(`${this.name} takes no damage.`);
                } else {
                console.log(`${this.armor} failed to protect ${this.name}`);
                this.health -= enemy.ATKPower
                console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
                console.log(`Soul Split steals 1 \u2764  health`);
                enemy.health += 1;
                }
            }
            }
            if(this.health <= 0){
                console.log("You are dead.");
            }
        }
} enemy.isConfused = false; // isConfused is reset after 1 turn
if (enemy.health > 0 && this.weapon == 'Poisin Dagger \uD83D\uDDE1\uFE0F \uD83E\uDE78'){
    console.log(`${enemy.name} is poisoned by the ${this.weapon} ${this.name} is wielding.`);
    enemy.health -= 1;
    console.log(`${enemy.name} loses 1 \u2764  health`);
    enemy.lifeStatus()
    if(enemy.health <= 0){
        console.log(`${enemy.name} is dead.`);
    }
}
console.log('-------------------------------------------');
if(enemy.health > 0 && this.health > 0){
console.log('\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 NEXT TURN \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25');
} else {console.log('\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 GAME OVER \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25');}

}// end of while statement
}// end of attack method
}// end of Character class
//* ----------------------------------------------------------------------------------------------

class Hero extends Character{
    constructor(name, health, ATKPower, armor, weapon){
        super(health, ATKPower)
        this.name = name;
        this.armor = armor;
        this.weapon = weapon;
    }
}
class Goblin extends Character{
    constructor(name, health, ATKPower){
        super(health, ATKPower)
        this.name = name;
    }
}
class Zombie extends Character{
    constructor(name, health, ATKPower){
        super(health, ATKPower)
        this.name = name;
    }
}
class Wizard extends Character{
    constructor(name, health, ATKPower, armor){
        super(health, ATKPower);
        this.name = name;
        this.armor = armor;
    }
}
class Shades extends Character{
    constructor(name, health, ATKPower){
    super(health, ATKPower);
    this.name = name;
    }
}
//* ----------------------------------------------------------------------------------------------
// ARMOR:
//?                                   50% protection  |   25% protection
let armor = ['Rune Full Body Armor\uD83D\uDEE1\uFE0F ', 'Graceful Cloak\uD83E\uDDB8', 'Agility Boots\uD83E\uDD7E']
//?                   ATKPower +2 | -1 hp every other turn to enemy |  speed to flee
let weapons = ['Dragon Claws\uD83D\uDC09\uD83D\uDD25', 'Poisin Dagger \uD83D\uDDE1\uFE0F \uD83E\uDE78', 'Mortality Elixir \uD83E\uDDEA']
//* ----------------------------------------------------------------------------------------------
// Hero Player Options:
let Elohim = new Hero("Hero Elohim\uD83D\uDC32", 20, 2, armor[0], weapons[0])
let PrincessAddy = new Hero("Princess Addy\uD83D\uDC51", 19, 3, armor[1], weapons[1])
let WizardArianwyn = new Wizard("Elf Wizard Arianwyn\uD83E\uDDDD\u200D", 25, 5, armor[1]) // Ally Wizard -> Uses fire wave 50% & water wave 50%
let MonkOmad = new Hero("Monk Omad\uD83E\uDDD8\u200D", 17, 1, armor[1]);
//* ----------------------------------------------------------------------------------------------
// Enemy Options:
let WizardLucien = new Wizard("Wizard Lucien\uD83E\uDDD9\u200D", 30, 4) // Enemy Wizard -> Uses soul split which restores 1 health
let Grubfoot = new Goblin("Grubfoot the Goblin", 12, 2)
let Mudknuckles = new Goblin("Mudknuckles", 8, 5)
let infinity = Number(Infinity)
let ZombiePirate = new Zombie("Zombie Pirate \u2620 ", infinity, 1)
let Shade = new Shades("Shade\uD83C\uDF0C", 1, 1)

//* ----------------------------------------------------------------------------------------------

characterChoices = () => {
console.log(`\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 WELCOME TO HEROSCAPE \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25

Choose Your Hero: 
1) ${Elohim.name}
2) ${PrincessAddy.name}
3) ${WizardArianwyn.name}
4) ${MonkOmad.name}`);
let yourHero = prompt()

if (yourHero == '1'){
    yourHero = Elohim;
} else if (yourHero == '2'){
    yourHero = PrincessAddy;
} else if (yourHero == '3'){
    yourHero = WizardArianwyn;
} else if (yourHero == '4'){
    yourHero = MonkOmad;
} else {return `${yourHero} is invalid`}

console.log(`Choose Your Enemy: 
1) ${Grubfoot.name}
2) ${Mudknuckles.name}
3) ${WizardLucien.name}
4) ${ZombiePirate.name}
5) ${Shade.name}`);
let yourEnemy = prompt()
    
if (yourEnemy == '1'){
    yourEnemy = Grubfoot;
} else if (yourEnemy == '2'){
    yourEnemy = Mudknuckles;
} else if (yourEnemy == '3'){
    yourEnemy = WizardLucien;
} else if (yourEnemy == '4'){
    yourEnemy = ZombiePirate;
} else if (yourEnemy == '5'){
    yourEnemy = Shade;
} else {return `${yourEnemy} is invalid`;}
    console.log(`You've chosen ${yourHero.name} as your Hero and ${yourEnemy.name} as your Enemy!`);
    console.log('-------------------------------------------');
    yourHero.attack(yourEnemy)
};    

characterChoices() // KICKS GAME OFF :) HAVE FUN & STAY ALIVE!