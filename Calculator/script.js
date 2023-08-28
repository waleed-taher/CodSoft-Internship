window.onload=()=>{
    document.getElementById('multi').innerText = 'x'
}

let string =''
let buttons = document.querySelectorAll('.button-num')
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', e=>{
        if(e.target.value == '='){
            result = eval(string)
            document.getElementById('result').innerText = result
        }else if(e.target.value == 'del'){
            let newString = string.substring(0,string.length-1)
            document.getElementById('operation').innerText = newString
            string = newString
            document.getElementById('result').innerText = ''
        }else{
            string += e.target.value
            document.getElementById('operation').innerText = string
        }
    })
})

const reset = () => {
    document.querySelector('.calc-operation').innerText = ''
    document.querySelector('.calc-typed').innerText = ''
    string =''
}