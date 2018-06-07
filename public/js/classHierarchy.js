

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    displayInfo() {
        console.log(this);
    }
}
class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
    displayInfo() {
        super.displayInfo();
    }
}
class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }
    setManager(manager) {
        this.manager = manager;
    }
    displayInfo() {
        super.displayInfo();
    }
}
class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department, developers) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }
    addDevelopers(developer) {
        this.developers.push(developer);
    }
    delDevelopers(developer) {
        for (let item in this.developers) {
            if (this.developers[item] == developer) {
                this.developers.splice(item, 1);
            }
        }
    }
    displayInfo() {
        super.displayInfo();
    }
}

let developer1 = new Developer('Вася', 27, '25/07/2017', 50000, 'Front-end');
let developer2 = new Developer('Петя', 28, '28/07/2017', 60000, 'Back-end');
let developer3 = new Developer('Кирюша', 29, '29/07/2017', 70000, 'Front-end');

let manager1 = new Manager('Масяня', 30, '30/07/2017', 80000, 'HR');

manager1.addDevelopers(developer1);
manager1.addDevelopers(developer2);
manager1.addDevelopers(developer3);
manager1.delDevelopers(developer2);
developer1.setManager(manager1);
developer2.setManager(manager1);
developer3.setManager(manager1);
developer1.displayInfo();
developer2.displayInfo();
developer3.displayInfo();
manager1.displayInfo();