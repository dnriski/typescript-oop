describe("properties", ()=>{
    class Customer{
        readonly id:number;
        name:string; //jika mau menambahkan default value bisa ditambahkan =
        age?:number;
        constructor(id:number, name:string) {
            this.id=id;
            this.name=name;
        }
        sayHello(name:string):void{
            console.info(`Hello ${name}, may name is ${this.name}`)
        }

    }
    it("should can have properties", ()=>{
        const customer = new Customer(1, "John");
        customer.age = 20

        console.info(customer)
    })
    it("should can have method", ()=>{
     const customer = new Customer(1, "Riski")
        customer.sayHello("Budi")
    })

})