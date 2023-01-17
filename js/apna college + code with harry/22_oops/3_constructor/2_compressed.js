class RailwayForm{
    constructor(givenname, trainno, address){
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }

    preview() {
        alert(this.name + ": Your form is for train number: " + this.trainno + " and your address is: " + this.address)
    }

    submit() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }

    cancel() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
        this.trainno = 0
    }
}


let harryForm = new RailwayForm("Harry", 13488, "420, pacific Ocean, Ocean, Bihar-000304045")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()
