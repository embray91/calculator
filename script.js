
let display =0;

let operations = {
add: function(a, b) {
    display = a + b;
    return display;
    },

subtract: function(a, b) {
    display = a - b;
    return display;
    },

multiply: function(a, b) {
    display = (a * b);
    return display;
    },

divide: function(a, b) {
    display = a/b;
    return display;
    },

operate: function(operator, num1, num2) {
    a = num1;
    b = num2;
    return operator(a,b);
    }
};

let screen = document.querySelector('.screen');

const buttons = document.getElementsByClassName('button');

for (let button of buttons) {
button.addEventListener('click', function(e) {
let screenText = document.createTextNode(e.currentTarget.textContent);
screen.appendChild(screenText);
});
}

const operators = document.querySelector('#operators');

for (let op of operators.children) {
    op.addEventListener('click', function(e) {
        if () // ... left off here, need to figure out if operators can be props in obj?
    });
}

