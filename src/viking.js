// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
  
    attack(){
      return this.strength
    }
  
    receiveDamage(damage){
      this.health = this.health - damage
    }
  }
  
  // Viking
  class Viking extends Soldier {
      constructor(name, health, strength) {
          super(health, strength)
          this.name = name;
      }
  
      receiveDamage(damage){
          this.health = this.health - damage
          if (this.health > 0) {
              return `${this.name} has received ${damage} points of damage`
          }
          if (this.health <= 0) {
              return `${this.name} has died in act of combat`
          }
        }
      
      battleCry(){
          return "Odin Owns You All!"
      }
  }
  
  // Saxon
  class Saxon extends Soldier{
      attack(){
          return this.strength
      }
  
      receiveDamage(damage){
          this.health = this.health - damage
          if (this.health > 0) {
              return `A Saxon has received ${damage} points of damage`
          }
          if (this.health <= 0) {
              return `A Saxon has died in combat`
          }
        }
  }
  
  function getRandom(max) {
      return Math.floor(Math.random() * max)
  }
  
  // War
  class War {
      constructor() {
          this.vikingArmy =[]
          this.saxonArmy =[]
      }
  
      addViking(Viking){
          this.vikingArmy.push(Viking)
      }
  
      addSaxon(Saxon){
          this.saxonArmy.push(Saxon)
      }
      
      vikingAttack(){
          let randomSaxonIndex = getRandom(this.saxonArmy.length);
          let randomVikingIndex = getRandom(this.vikingArmy.length);
          let randomViking = this.vikingArmy[randomVikingIndex];
          let randomSaxon = this.saxonArmy[randomSaxonIndex];
          let damage = randomSaxon.receiveDamage(randomViking.strength)
          //this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
          if ( randomSaxon.health <= 0){
              this.saxonArmy.splice([randomSaxonIndex], 1);
          }
          return damage
      }
  
      saxonAttack(){
          let randomSaxonIndex = getRandom(this.saxonArmy.length);
          let randomVikingIndex = getRandom(this.vikingArmy.length);
          let randomViking = this.vikingArmy[randomVikingIndex];
          let randomSaxon = this.saxonArmy[randomSaxonIndex];
          let damage = randomViking.receiveDamage(randomSaxon.strength)
          // this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
          if (randomViking.health <= 0){
              this.vikingArmy.splice([randomVikingIndex], 1);
          }
          return damage
      }
  
      showStatus(){
          if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0){
              return "Vikings and Saxons are still in the thick of battle.";
          } else if (this.saxonArmy.length === 0 && this.vikingArmy.length !== 0){
              return "Vikings have won the war of the century!";
          } else if (this.vikingArmy.length === 0 && this.saxonArmy.length !== 0){
              return "Saxons have fought for their lives and survived another day...";
          } 
      }
  
  }
  