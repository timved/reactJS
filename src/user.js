import './user.css';
export default class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHI(){
        document.write(`Hi, ${this.firstName} ${this.lastName} `);
    }
    
}