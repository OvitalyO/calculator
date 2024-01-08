const NUMBER_TYPE = 'number';
const OPERATION_TYPE = 'operation';
const OPERATIONS = ['+', '-', '*', '/']

function inputNumber(setExpr) {
    return () => {
        console.log(this.value, this.value)
        setExpr(expr => {

            if (!expr.length || isNaN(expr[expr.length - 1])) expr.push(this.value)
            else expr[expr.length - 1] += this.value
            return [...expr]
        })
    };
}

function inputOperation(setExpr) {
    return () => {
        console.log(this.value)
        setExpr(expr => {
            !OPERATIONS.includes(expr[expr.length - 1]) ? expr.push(this.value) : expr.slice(0, -1).push(this.value)
            return [...expr]
        })

    }
}

let store = {
    buttons: [
        {value: '1', type: NUMBER_TYPE, cb: inputNumber},
        {value: '2', type: NUMBER_TYPE, cb: inputNumber},
        {value: '3', type: NUMBER_TYPE, cb: inputNumber},
        {value: '4', type: NUMBER_TYPE, cb: inputNumber},
        {value: '5', type: NUMBER_TYPE, cb: inputNumber},
        {value: '6', type: NUMBER_TYPE, cb: inputNumber},
        {value: '7', type: NUMBER_TYPE, cb: inputNumber},
        {value: '8', type: NUMBER_TYPE, cb: inputNumber},
        {value: '9', type: NUMBER_TYPE, cb: inputNumber},
        {value: '0', type: NUMBER_TYPE, cb: inputNumber},
        {value: '/', type: OPERATION_TYPE, cb: inputOperation},
        {value: '*', type: OPERATION_TYPE, cb: inputOperation},
        {value: '-', type: OPERATION_TYPE, cb: inputOperation},
        {value: '+', type: OPERATION_TYPE, cb: inputOperation},
        // {value: '=', type: OPERATION_TYPE, cb: inputOperation},
    ]
}
export default store;
