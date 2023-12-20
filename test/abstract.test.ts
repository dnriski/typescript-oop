describe("Abstract", ()=>{
    abstract class Customer{
        readonly id:number
        abstract name:string;
        constructor(id:number){
            this.id=id
        }
        hallo() {
            console.log("Hallo")
        }
        abstract sayHello(name:string):void
            }
    class RegularCustomer extends Customer{
        name:string;
        constructor(id:number, name:string) {
            super(id);
            this.name=name
        }
        sayHello(name: string) {
            console.log(`Hello ${name}, my name is ${this.name}`)
        }
    }



    it('abstract class tidak bisa dibuat object, harus buat object di turunannya', ()=>{
        const customer = new RegularCustomer(1, "Budi")
        console.log(customer)
    })
})