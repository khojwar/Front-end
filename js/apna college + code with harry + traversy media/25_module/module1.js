const hello = ()=> {
    console.log("Hello Harry")
}

const ahello = (name)=>{
    console.log("hello " + name);
}


module.exports = {hello, ahello}   // same as below line
// module.exports {hello: hello, ahello: ahello}