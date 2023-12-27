const NUMBER_TYPE = 'number';
const OPERATION = 'operation';
const inputNumber = (setValue, value) => e => {
    console.log(value, e.target.value)
    setValue(value + e.target.value)
};

const inputOperation = (setValue, value) => e => {
    console.log(value, e.target.value)
    if (!['+','-','*','/'].includes(value.split('').pop())) {
        setValue(value + e.target.value)
    }
};
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
        {value: '/', type: OPERATION, cb: inputOperation},
        {value: '*', type: OPERATION, cb: inputOperation},
        {value: '-', type: OPERATION, cb: inputOperation},
        {value: '+', type: OPERATION, cb: inputOperation},
        // {value: '=', type: OPERATION, cb: inputOperation},
    ]
}
export default store;

// const inputNumber = function (setValue) { return function (val) {
//     console.log(this)
//     setValue(prevState => {
//         console.log(this)
//         return prevState + val
//     })
// }};