class Human {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];

    static addResident(apartment, human){
        if(!(human instanceof Human)){
            console.log('Who is this?!');
            return;
        }

        apartment.residents.push(human);
    }
}

class Building {
    apartments = [];

    constructor(maxApartments){
        this.maxApartments = maxApartments;
    }

    static addApartment(building, apartment){
        if(!(apartment instanceof Apartment)){
            console.log('You can add only the instances of Apartment');
            return;
        }

        if(building.apartments.length < building.maxApartments){
            building.apartments.push(apartment);
        } else {
            console.log('Ouch! Seems like there is no space left for another apartment.');
        }
    }
}

const human1 = new Human('Serge', 'male');
const human2 = new Human('Anna', 'female');
const human3 = new Human('Danyyl', 'male');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

Apartment.addResident(apartment1, human1);
Apartment.addResident(apartment1, human2); // подселим к тебе Аню, чтобы жизнь малиной не казалась
Apartment.addResident(apartment2, human3);

const apartmentBlock = new Building(2);

Building.addApartment(apartmentBlock, apartment1);
Building.addApartment(apartmentBlock, apartment2);
Building.addApartment(apartmentBlock, apartment3);

console.log(apartmentBlock);