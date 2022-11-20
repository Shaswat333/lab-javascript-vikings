// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    };
    receiveDamage(thedamage){
        this.health -= thedamage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name) {
        this.name = name;
    }
    receiveDamage(thedamage) {
        this.health -= thedamage;
        if (this.health = 0) {
            return`${this.name} has died in act of combat`;
        } else {
            return`${this.name} has received ${this.thedamage} points of damage`;
        }
    }
    battleCry() {
        return `Odins Owns You All`;
    }

}


// Saxon
class Saxon extends Soldier{
    receiveDamage(thedamage) {
        this.health -= thedamage;
        if (damage = 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${this.thedamage} points of damage`;
        }
    }
}

// War
class War {
    constructor(){
    this.vikingArmy= [];
    this.saxonArmy = [];
    }
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
