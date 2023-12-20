describe("Polymorphism", ()=>{
    class Employee{
        constructor(public name:string){
            }
    }
    class Manager extends Employee{

    }
    class VicePresident extends Manager{

    }

    function sayHello(employee:Employee){
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident
            console.log(`Hallo Vice President ${vp.name}`)
        }else if(employee instanceof Manager){
            const manager = employee as Manager
            console.log(`Hallo Manager ${manager.name}`)
        }else {
            console.log(`Hallo employee ${employee.name}`)
        }
    }

    it('tidak masalah jika berubah bentuk selama masih turunann', ()=>{
        let employee: Employee = new Employee("Eko")
        console.info(employee)

        employee = new Manager("Eko")
        console.info(employee)

        employee = new VicePresident("Eko")
        console.info(employee)

    })
    it('para', ()=>{
        sayHello(new Employee("Eko"))
        sayHello(new Manager("Budi"))
        sayHello(new VicePresident("Joko"))
    })
})