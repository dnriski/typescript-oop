describe("Parameter Properties", ()=>{
    class Person{
        constructor(public name:string){
        }
    }
    it("should support", ()=>{
        const person = new Person("Riski")
        console.log(person.name)

    })
})