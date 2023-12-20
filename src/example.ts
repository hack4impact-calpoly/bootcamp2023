import cowsay from "cowsay";

function saySomething(something: string){
    console.log(cowsay.say({text: something, }))   
}

saySomething("Hello bootcamp!")