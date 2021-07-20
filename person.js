class Person{
    constructor(){
        this.name='Japneet';
        this.age=20;
    }
    
    greetings(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

module.exports=Person;