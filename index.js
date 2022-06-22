var a =parseFloat(prompt('Enter first number'))
var b =parseFloat(prompt('Enter secont number'))
var c = prompt('Choose operation: +, -, *, **, /, %')
var result

if (c == '+'){
    result = a + b
}else if (c == '-'){
    result = a - b
}else if (c == '*'){
    result = a * b
}else if (c == '**'){
    result = a ** b
}else if (c == '/'){
    result = a / b
}else if (c == '%'){
    result = a % b
}

alert('Answer: '+ result)