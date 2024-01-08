export const PRECEDENCE = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
};

Array.prototype.tail = function (pick = 1) { return this[this.length - pick] }

function infixToRPN(tokens, precedence = PRECEDENCE) {
    const outputQueue = [];
    const operatorStack = [];

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (!isNaN(token)) { // Если токен - число, добавляем в выходную очередь
            outputQueue.push(parseFloat(token));
        } else if (token in precedence) {
            while (
                operatorStack.length > 0 &&
                precedence[operatorStack.tail()] >= precedence[token]
            ) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        } else if (token === '(') {
            operatorStack.push(token);
        } else if (token === ')') { // Если токен - закрывающая скобка, выталкиваем операторы из стека в выходную очередь
            while (operatorStack.length > 0 && operatorStack.tail() !== '(') {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.pop(); // Удаляем открывающую скобку из стека
        }
    }

    // Добавляем оставшиеся операторы из стека в выходную очередь
    while (operatorStack.length > 0) {
        outputQueue.push(operatorStack.pop());
    }

    return outputQueue;
}

const sum = (a, b) => a + b
const substuct = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => String(a / b).length > 5 ? (a / b).toFixed(5) : a / b

function arithmetic (a, op, b) {
    switch(op) {
        case '+':
            return sum(a, b)
        case '-':
            return substuct(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
        default :
            throw new Error('unrecognized operation')
    }
}

function computeRPN (rpnExpression) {
    const output = [...rpnExpression.reverse()]
    const result = []

    while (output.length > 0) {
        if (!isNaN(output.tail())) result.push(output.pop())
        else {
            const b = result.pop()
            const a = result.pop()
            result.push(arithmetic(a, output.pop(), b))
        }
    }

    return result
}

export function compute(tokens) {
    const rpnExpression = infixToRPN(tokens);
    return computeRPN(rpnExpression);
}
