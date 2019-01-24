/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// ES6 Class Method
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was destroyed from the game`;
    }
}

// ES5 Prototype Method
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was destroyed from the game`;
//   }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  // ES6 Class Method
  class CharacterStats extends GameObject {
    constructor(charAttributes) {
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
  }

  // ES5 Prototype Method
//   function CharacterStats(charAttributes) {
//     GameObject.call(this, charAttributes);
//     this.healthPoints = charAttributes.healthPoints;
//     this.name = charAttributes.name;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage`;
//   }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */


// ES6 Class Method
class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet() {
        return(`${this.name} offers a greeting in ${this.language}`); 
    }
}

// // ES5 Prototype Method
//   function Humanoid(humanAttributes) {
//     CharacterStats.call(this, humanAttributes)
//     this.team = humanAttributes.team;
//     this.weapons = humanAttributes.weapons;
//     this.language = humanAttributes.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return(`${this.name} offers a greeting in ${this.language}`);
//   }
  
  // Hero *************************

  // ES6 Class Method
  class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
    }
    saveYou() {
        return `${this.name} is here to save the day!`;
    }
}

  // ES5 Prototype Method
//   function Hero(heroAttributes) {
//     Humanoid.call(this, heroAttributes)
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.saveYou = function() {
//     return `${this.name} is here to save the day!`;
//   }
  
  // Villain ******************************************
  
 // ES6 Class Method
  class Villain extends Humanoid {
    constructor(villainAttributes) {
        super(villainAttributes);
    }
    evilThing() {
        return `${this.name} tries to pee on you like R Kelly`;
    }
}

// ES5 Prototype Method
//   function Villain(villainAttributes) {
//     Humanoid.call(this, villainAttributes)
//   }
  
//   Villain.prototype = Object.create(Humanoid.prototype);
  
//   Villain.prototype.evilThing = function() {
//     return `${this.name} tries to pee on you like R Kelly`;
//   }
  
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const heroGuy = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 3,
        width: 2,
        height: 8,
      },
      healthPoints: 30,
      name: 'Loser Man',
      team: 'Team Hero',
      weapons: [
        'Fishing Pole',
        'Rolled Up Newspaper',
      ],
      language: 'Dark Knight Voice',
    });
  
    const villainGuy = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 6,
      },
      healthPoints: 25,
      name: 'Dr. Evil',
      team: 'Team Villain',
      weapons: [
        'Hockey Stick',
        'Chain',
      ],
      language: 'Squeal',
    });
  
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    console.log(heroGuy.saveYou()); // Loser Man is here to save the Day!
    console.log(villainGuy.evilThing()); // Dr. Evil tries to pee on you like R Kelly.
  
    
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!