// -------------------Enum --> restrict user choice--------------------------
// certain times when  you want to restrict somebody's choice or with the value offered here. 
// for example1: in an e-commerce application somebody is putting up order so you want to really restrict the order status here so order can be in the wish list or it can be delivered or it can be shipped it can be returned.
// example2: In case of plane ticket booking especially the aeroplane there are only three type of seats which are regularly available(aisle, middle, and window). You don't want to assign them crew tickets or something else like that.



// -------------------------not best way to use-----------------------------------
// what if somebody changes this variable. This is not a good code


// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AISLE) {       

// }



// ------------------------enum----------------------------------
// when there is many restricted option in that case enums serves 

enum SeatChoie {
    AISLE,
    MIDDLE = 22,        // you can put up a strict number and rest of the value will follow up
    WINDOW,
    FORTH
}


const trkSeat = SeatChoie.AISLE







export {}