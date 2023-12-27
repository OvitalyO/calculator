import {useState} from 'react'
import store from "./store.js";
import './App.css'

function App() {
    const [value, setValue] = useState(''); //expression
    // const [state, setState] = useState(false); // isExtendedMode

    //пометить в функции
    // const buttons = [DE,OFF,3,4,5];

    // const myFunc = e => setValue(value + e.target.item.value) //changeExpression
    // const myFunc = (val)=> setValue( value + val)

    console.log(value)

    return (
        <div className='wrapper'>
            {/*<h1 className='calc'>Калькулятор React</h1>*/}
            <div className='calc'>
                <div>
                    <div className='input'>{value}</div>
                </div>
                <div>
                    {store.buttons.map(item => <button
                        key={item.value}
                        value= {item.value}
                        // onClick={()=>myFunc(item.value)}
                        onClick={item.cb(setValue, value)}
                    >
                        {item.value}
                    </button>)}
                </div>
                {/*<div>*/}
                {/*    /!*добавить симантику*!/*/}
                {/*    <button onClick={() => setState(!state)}>Func</button>*/}
                {/*    <input type='button' value="DE" onClick={() => setValue(value.slice(0, -1))}/>*/}
                {/*    <input type='button' value="OFF" onClick={() => setValue('')}/>*/}
                {/*    <input type='button' value="/" onClick={myFunc}/>*/}
                {/*    {state === true &&*/}
                {/*        <input type='button' value="Fa" onClick={e => setValue(value + e.target.value)}/>}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input type='button' value="7" onClick={myFunc}/>*/}
                {/*    <input type='button' value="8" onClick={myFunc}/>*/}
                {/*    <input type='button' value="9" onClick={myFunc}/>*/}
                {/*    <input type='button' value="*" onClick={myFunc}/>*/}
                {/*    {state === true &&*/}
                {/*        <input type='button' value="Da" onClick={e => setValue(value + e.target.value)}/>}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input type='button' value="4" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="5" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="6" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="+" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    {state === true &&*/}
                {/*        <input type='button' value="Net" onClick={e => setValue(value + e.target.value)}/>}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input type='button' value="1" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="2" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="3" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="-" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    {state === true &&*/}
                {/*        <input type='button' value="Get" onClick={e => setValue(value + e.target.value)}/>}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input type='button' value="00" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="0" onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="." onClick={e => setValue(value + e.target.value)}/>*/}
                {/*    <input type='button' value="=" onClick={e => setValue(eval(value))}/>*/}
                {/*    /!*eval убрать*!/*/}
                {/*    {state === true &&*/}
                {/*        <input type='button' value="Ya" onClick={e => setValue(value + e.target.value)}/>}*/}
                {/*</div>*/}
            </div>

            {/*<br/>*/}
            {/*<div className="calc">*/}
            {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.jsx</code> and save to test HMR*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*    Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </div>
    )
}

export default App
