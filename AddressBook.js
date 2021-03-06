class AddressBook {
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'first name is Incorrect';
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'last name is Incorrect';
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if(addressRegex.test(address))
            this._address = address;
        else throw 'address is incorrect';
    }
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city))
            this._city = city;
        else throw 'city is incorrect';
    }
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z]{4,}$");
        if(stateRegex.test(state))
            this._state = state;
        else throw 'state is incorrect';
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("(^[0-9]{3})([\s]?)([0-9]{3}$)");
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'zip is incorrect';
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("[1-9][0-9][\\s][1-9][0-9]{9}");
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone number is incorrect';
    }
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("([a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9])(([+-_.][a-zA-Z0-9]*)?)(@[a-zA-Z0-9]*)[.]([a-z]{2,})(([.][a-zA-z]{2})?)");
        if(emailRegex.test(email))
            this._email = email;
        else throw 'email is incorrect';
    }
    toString() {
        return "first name="+ this.firstName +",last name="+ this.lastName +", address="+ this.address+", city="+ this.city
        +", state="+ this.state+", zip="+ this.zip+", phone="+ this.phoneNumber+", email="+ this.email+"\n";
    }

}
let contactArray = new Array();
addContact(new AddressBook("Mark","Taylor","RTNagar","Bengaluru","Karnataka",577333,"91 8989898989","mark@gmail.com"));
addContact(new AddressBook("Tim","Holland","JPNagar","Bengaluru","Karnataka",560180,"91 6767676767","tim@gmail.com"));
addContact(new AddressBook("Brad","Pitt","Jaynagar","Shimoga","Karnataka",562380,"91 9967676767","brad@gmail.com"));
addContact(new AddressBook("Timothee","Root","JPnagar","Pune","Maharashtra",560080,"91 9967679967","root@gmail.com"));
//add
function addContact(contact){
    let duplicate = contactArray.find(currentContact => currentContact._firstName == contact._firstName && currentContact._lastName == contact._lastName);
    if(duplicate == null){
        contactArray.push(contact);
    }
    else console.log("the contact already exists");
}

addContact(new AddressBook("Avinash","Kodle","JPNagar","Shimoga","Karnataka",547415,"91 8834567891","avi@gmail.com"));
addContact(new AddressBook("Avinash","Kodle","NPNagar","Bengaluru","Karnataka",522415,"91 8899567891","avi@gmail.com"));
console.log(contactArray.toString());
//edit
function editContact(firstName,attribute,value){
    let contact = contactArray.find(contact => contact._firstName == firstName);
    if(contact == null) console.log("Contact not present");
    switch(attribute){
        case "firstName":
            contact._firstName = value; break;
        case "lastName":
            contact._lastName = value; break;
        case "address":
            contact._address = value; break;
        case "city":
            contact._city = value; break;
        case "state":
            contact._state = value; break;
        case "zip":
            contact._zip = value; break;
        case "phoneNumber":
            this._phoneNumber = value; break;
        case "email":
            this._email = value; break;
        default:
            console.error("incorrect attribute");
    }
}
editContact("Tim","zip",512124);
console.log("After edit");
console.log(contactArray.toString());
//delete
function deleteByName(firstName,lastName){
    let index  = contactArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
    contactArray.splice(index,1);
}

deleteByName("Tim","Holland");
console.log("\n after deletion");
console.log(contactArray.toString());

//count
function getCount(){
    let numberOfContacts = contactArray.reduce(numberOfContacts => numberOfContacts +=1,0);
    return numberOfContacts;
}

console.log("Number of contacts: "+getCount());
//search by city or state
function searchInACity(firstName,city){
    let peopleInGivenCity = contactArray.filter(contact => contact._firstName == firstName && contact._city == city);
    if(peopleInGivenCity.length == 0) { 
        console.log("\nno contact named "+ firstName+ " is found in city "+ city);
    }
    else {
        console.log("\nContacts named "+ firstName+" in city "+ city+ " are:");
        console.log(peopleInGivenCity.toString());
    }
}
function searchInAState(firstName,state){
    let peopleInGivenState = contactArray.filter(contact => contact._firstName == firstName && contact._state == state);
    if(peopleInGivenState.length == 0) {
        console.log("\nno contact named "+ firstName+ " is found in state "+ state);
    }
    else{
        console.log("\nContacts named "+ firstName+" in state "+ state+ " are:");
        console.log(peopleInGivenState.toString());
    }
}

searchInACity("Mark","Bengaluru");
searchInACity("Tim","Pune");
searchInAState("Avinash","Karnataka");
searchInAState("Mark","Kerala");

//view persons in a city or state
function contactsInCity(city){
    let peopleInGivenCity = contactArray.filter(contact => contact._city == city);
    if(peopleInGivenCity.length == 0) { 
        console.log("\ncity not found");
    }
    else {
        console.log("\nContacts in city "+ city+ " are:");
        console.log(peopleInGivenCity.toString());
    }
}

function contactsInState(state){
    let peopleInGivenState = contactArray.filter(contact => contact._state == state);
    if(peopleInGivenState.length == 0) { 
        console.log("\nstate not found");
    }
    else {
        console.log("\nContacts in state "+ state+ " are:");
        console.log(peopleInGivenState.toString());
    }
}

contactsInCity("Shimoga");
contactsInState("Karnataka");

//get count by city or state

function getCountByCity(city){
    let numberOfContacts = contactArray.filter(contact => contact._city == city)
                                       .reduce(numberOfContacts => numberOfContacts+1,0);
    return numberOfContacts;
}
function getCountByState(state){
    let numberOfContacts = contactArray.filter(contact => contact._state == state)
                                       .reduce(numberOfContacts => numberOfContacts+1,0);
    return numberOfContacts;
}

console.log("Number of contacts in Shimoga:" + getCountByCity("Shimoga"));
console.log("Number of contacts in Karnataka:" + getCountByState("Karnataka"));

//sort by name
function SortByName(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._firstName > contact2._firstName)
            return 1;
        else if(contact1._firstName < contact2._firstName)
            return -1;
        else {
            if(contact1._lastName > contact2._lastName)
            return 1;
            else if(contact1._lastName < contact2._lastName)
            return -1;
            else return 0;
        }
    })
}

SortByName();
console.log("\nSorted Array based on name: ")
console.log(contactArray.toString());

//sort by zip, state, city
function SortByZip(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._zip > contact2._zip)
            return 1;
        else if(contact1._zip < contact2._zip)
            return -1;
        else 0;
    })
}

function SortByCity(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._city > contact2._city)
            return 1;
        else if(contact1._city < contact2._city)
            return -1;
        else 0;
    })
}

function SortByState(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._state > contact2._state)
            return 1;
        else if(contact1._state < contact2._state)
            return -1;
        else 0;
    })
}

SortByZip();
console.log("Sorted Array based on Zip: ")
console.log(contactArray.toString());

SortByCity();
console.log("Sorted Array based on City: ")
console.log(contactArray.toString());

SortByState();
console.log("Sorted Array based on State: ")
console.log(contactArray.toString());
