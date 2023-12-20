describe("method overiding, mendeklarasikan ulang method yang ada di parent classnya",()=>{
    class Employee{
        name:string;
        constructor(name:string){
            this.name= name
        }
    sayHello(name:string):void{
        console.log(`Hello ${name} my name is ${this.name}`)
    }}

    class Manager extends Employee{
        sayHello(name:string):void{
            super.sayHello(name)
            console.log(`And,  i am your manager`)
        }
    }
    it("should support", ()=>{
        const employee=new Employee("RISKI")
        employee.sayHello("Budi")

        const manager = new Manager("Eko")
        manager.sayHello("Budi")
    })

})