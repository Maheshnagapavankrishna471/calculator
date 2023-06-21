let userinput = document.querySelector('.userInput')
let buttons = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operators')
let clear = document.querySelector('.clear-btn')
let equal = document.querySelector('.equal-btn')
buttons.forEach((val)=>{
    val.addEventListener('click',()=>{
        userinput.value += val.innerHTML
    })
})
operators.forEach((val)=>{
    val.addEventListener('click',()=>{
        userinput.value += val.innerHTML
    })
})


equal.addEventListener('click',()=>{
    const result = eval(userinput.value)
    userinput.value = result

})
clear.addEventListener('click',()=>{
    userinput.value = ''
})