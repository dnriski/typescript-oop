describe('instance of', ()=>{
    it("mengecek type", ()=>{
        class Employee{}
        class Manager{}

        const budi = new Employee()
        const eko = new Manager()

        console.log(typeof budi) //tipe data yang ditampilkan object

        expect(budi instanceof Employee).toBe(true)
        expect(budi instanceof Manager).toBe(false)
    })
})