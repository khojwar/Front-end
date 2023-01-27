class RailwayForm {
    submit(){
        alert(this.name +": your form is submitted for train number: " + this.trainno)
    }
    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }

    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}


// Create a form for harry
let harryForm = new RailwayForm()
// fill the form with Harry's details
harryForm.fill("Harry", 145316)


// Create a forms for rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
// fill the forms with Harry's details
rohanForm1.fill("Rohan", 222420)
rohanForm2.fill("Rohan", 2229211)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
