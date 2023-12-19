describe("getter setter", ()=>{
    class Category{
        _name?:string;

        get name():string{
            if(this._name){
                return this._name
            }else{
                return "Empty"
            }
         }
         set name(value:string){
            if(value !==""){
                this._name = value;
            }
         }
    }
    it("should can have properties", ()=>{
        const category = new Category()
        console.info(category.name)

        category.name="Food"
        console.info(category.name)

        category.name=""
        console.info(category.name)
    })


})