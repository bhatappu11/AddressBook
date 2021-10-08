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
contactArray.push(new AddressBook("Mark","Taylor","RTNagar","Bengaluru","Karnataka",577333,"91 8989898989","mark@gmail.com"));
contactArray.push(new AddressBook("Tim","Holland","JPNagar","Bengaluru","Karnataka",560180,"91 6767676767","tim@gmail.com"));
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
console.log(contactArray.toString());
//delete
function deleteByName(firstName,lastName){
    let index  = contactArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
    contactArray.splice(index,1);
}

deleteByName("Tim","Holland");
console.log("\n after deletion")
console.log(contactArray.toString());
