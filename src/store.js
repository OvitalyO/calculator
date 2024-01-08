import {compute} from "./helpers.js";

const NUMBER_TYPE = 'number';
const OPERATION_TYPE = 'operation';
const OPERATIONS = ['+', '-', '*', '/']

function inputNumber(setExpr) {
    return () => {
        setExpr(expr => {
            console.log('Ghh',expr, this.value)
            if (!expr.length || OPERATIONS.includes(expr[expr.length - 1])) return [...expr, this.value]
            else return [...expr.slice(0, -1), expr[expr.length - 1] + this.value]
        })
    };
  }

  function inputOperation(setExpr) {
    return () => {
    console.log('inputOperation',this.value)
      setExpr(expr => {
        if (!expr.length) return ['0', this.value]
        if (!OPERATIONS.includes(expr[expr.length - 1])) expr.push(this.value)
        else expr[expr.length - 1] = this.value
        return [...expr]
      })

    }
  }

function calculate (setExpr) {
    return () => setExpr(compute)
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
        {value: '=', type: OPERATION_TYPE, cb: calculate},
    ]
}
export default store;
