// --------------------------abstract class---------------------------------------------
// interfaces and abstrct classes are very very similar. interfaces are implemented by any class ("implements" word only used for interface and easier way to remember is interface and implement both start with "i"). abstract class cannot implement but extends. this is like having an inheritance here
// abstract class exactly like blueprint. You cannot create an object from it. it is the responsibility of the class who is extending it 
// abstract class ''''cannot create their object'''' on their own but they help to define the class who are inheriting them get a better structure of their classes and some compulsory thing that you have to put if you want to put pu some method that are compulsory lead to there. you can make those methods are abstract as well in case you want to give them some feature by default by giving them the methods you can go ahead and do that these classes can actually overwrite these methods as well but if you want them that this should be like this only always then use the abstract method.


abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){

    }


    // abstract method --> it means I'm not going to provide you definition. this is just a method. 
    abstract getSepia(): void
    getReelTime(): number{                  //this doesnot give any problem here. this is the power of abstract class. this is something that makes them still in the in the realm of the script otherwise everything else is being done by the implement and interfaces. this is what it makes something new.  
        // some complex calculation
        return 8
    }


}

// const tikaram = new TakePhoto("test", "test")           // abstract class ''''cannot create their object'''' on their own



class Instagrams extends TakePhoto{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)       // we actually use a keyword "super" in which you have to pass on all the required values(cameraMode, filter)
    }

    getSepia(): void {              
        console.log("sepia")
    }

}

const tikaram = new Instagrams("test", "test", 3)      // You can create object from the class who is inheriting abstract class

