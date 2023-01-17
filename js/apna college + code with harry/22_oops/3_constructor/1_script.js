class RailwayForm {
    constructor(givenname, trainno){
        console.log("construcor called " + givenname + " " + trainno);
        this.name = givenname
        this.trainno = trainno
    }

    submit(){
        alert(this.name +": your form is submitted for train number: " + this.trainno)
    }

    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }


}


// Create and fill a form for harry
let harryForm = new RailwayForm("Harry", 145316)



// Create and fill a forms for rohan
let rohanForm1 = new RailwayForm("Rohan", 222420)
let rohanForm2 = new RailwayForm("Rohan", 2229211)


harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
