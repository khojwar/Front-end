
// -----------------------interface------------------------------
// interface is exactly similar to type
// interface is lose form of class. there should be method, name should be same but doesnot say what should you do inside it. It just has basic protocols.

// Operating System is interface for hardware. it doesnot allow you to that when you click a button how does it happen, you don't  know. You dont care about it you just know, if I click on this sometihing happens, if i double click on a folder it opens up, how it does behind the scene, what method are called. you dont care. so, that is an interface and that is exactly the same interface in the typescript as well.




//To understand the eg assume a scenario, You are creating a new user and this user has some of the properties like may be email, may be a userId, may be there is a google login, may be there is a databaseId as well and you're trying to start a trial for this user for whatever is the services you are. you are actually selling and also you want to give him some discount code as well.

interface User {                // type user {} justai use gareko xa
    readonly dbId: number,      // it is not going to change
    email: string,
    userId: number,
    googleId?: string,         // it might be not as compulsory (this is optional, you pass it great. you dont pass it nobody is going to stop you)

    // startTrail: () => string,    // function/method  (one way to define method)
    startTrail(): string,           // function/method  (another way to define method). *method return type is string*

    getCoupen(coupenname: string, value: number): number        // coupenname is string, value is number and return type is number
}



const tikaram: User = {dbId: 22, email: "t@t.com", 
userId: 2211,
startTrail: () => {
    return "trail started"
},
getCoupen: (name: "tikaram10", off: 10) {
    return 10
}
}



tikaram.email = "t@trk.com"     // assigning value is allowed
// tikaram.dbId = 33            // assigning value is not allowed. Because it is declared as readonly 