// -------------------------------------Importants of interface or protocol-------------------------------------------
// interface provides guideline in the TS. it brings the consistancy so that getting less error in js
// if class maa interface implement gareko xa bhane interface maa bhayako kura hunai parxa plus aru pani thapna sakinxa (eg. compulsury(interface) + optional)


// ios app development there are a lot of protocols. Interface we call them in the TS. they dont have definations. They have just some protocols that if you want to do certain things you have to do this way and that is the only way you want to do it. these kinds of thingss are similar in interfaces. 
// eg. we building mob. app which use camera



interface TakePhoto {           // in your entire application no matter how or who is building it if anybody wants to create a feature of taking photos should always and always follow this interface 
    cameraMode: string
    filter: string
    burst: number
}


interface Story {
    createStory(): void     // this is the method return void
}


class Instagram implements TakePhoto {          // if you want to TakePhoto. there are certain number of things that should always be there so if you are implementing TakePhoto protocol/interfaces. there should be all the properties of TakePhoto interfaces
    constructor(public cameraMode: string, public filter: string, public burst: number){

    }
}


// -------------------------------------implementing TakePhoto interface here------------------------------------------
// class Youtube implements TakePhoto {
//     constructor(public cameraMode: string, public filter: string, public burst: number, public short: string){          // if you are doing more than what is necessary that is allowed but you cannot do less than what is necessary up there.

//     }
// }




// --------------------------implementing both TakePhoto and Story interfaces here--------------------------------------
class Youtube implements TakePhoto, Story {         // this need to have a method with the exact same name "createStory"
    constructor(public cameraMode: string, public filter: string, public burst: number, public short: string){          // if you are doing more than what is necessary that is allowed but you cannot do less than what is necessary up there.

    }


    createStory(): void {           // this need to have a method with the exact same name "createStory"
        console.log("Story was created");
        
    }
}
