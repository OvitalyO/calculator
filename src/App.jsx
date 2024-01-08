import {useState} from 'react'
import store from "./store.js";
import './App.css'

function App() {
    const [expr, setExpr] = useState([]); //expression
    console.log(expr)
    return (
        <div className='wrapper'>
            {/*<h1 className='calc'>Калькулятор React</h1>*/}
            <div className='calc'>
                <div>
                    <div className='input'>{expr.join(' ')}</div>
                    {/*<div className='input'>{String(expr)}</div>*/}
                </div>
                <div>
                    {store.buttons.map(item => <button
                        key={item.value}
                        value= {item.value}
                        onClick={item.cb(setExpr)}
                    >
                        {item.value}
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default App
