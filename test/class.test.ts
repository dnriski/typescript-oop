describe('class', ()=>{
    class Customer{
        constructor() {
            console.log("Create new Customer")
        }
    }
    class Order{

    }
    it("should can create class", ()=>{
        const customer: Customer = new Customer()
        const order=new Order();
    })
    it("should can create constructor", ()=>{
        new Customer()
        new Customer()
    })
})