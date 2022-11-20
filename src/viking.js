// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage);
}

// Viking
class Viking extends Soilder {
    constructor(name,health,strength) {
        this.name= name;
        this.health= health;
        this.strength= strength;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (damage = 0) {
            return`${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${this.damage} points of damage`;
        }
    }
    battleCry() {
        return `Odins Owns You All`;
    }

}
const odin = new Viking('Odin');

// Saxon
class Saxon extends Soilder{
    receiveDamage(damage) {
        if (damage = 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${this.damage} points of damage`;
        }
    }
}

// War
class War {
    vikingArmy= [];
    saxonArmy = [];

    addViking(Viking){

    }
    addSaxon(Saxon){

    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){
        
    }
}
