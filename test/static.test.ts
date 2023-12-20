describe("static properties",()=>{
    class Configuration {
        static NAME: string ="Belajar Typescript OOP"
        static VERSION:number =1.0
        static AUTHOR:string="Riski Dwi Nugroho"
    }

    class MatUtill{
        static sum(...values:number[]):number{
            let total = 0
            for(const value of values) {
                total += value;
            }
            return total
        }
    }
    it("",()=>{
        console.info(MatUtill.sum(1,2,3,4))
    })
    it("should support", ()=>{
        console.log(Configuration.NAME)
        console.log(Configuration.VERSION)
    })
})