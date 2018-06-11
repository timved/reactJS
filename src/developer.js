import './developer.css';
export default class Developer {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    userFirstName(){
        return this.firstName;
    }
    userLastName(){
        return this.lastName;
    }
    
}