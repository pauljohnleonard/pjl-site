declare var XorGen:any

export class Generator {

    xor4096:any

    constructor(public seed:any) {
         if (seed === undefined || seed === null) {
           seed=Math.random()
         }
         this.seed=seed
         this.xor4096=new XorGen(seed)
            
    }
    
    random():number {
         var x=this.xor4096.nextFloat()
       //  console.log(x)
        return x
    }
}



  

