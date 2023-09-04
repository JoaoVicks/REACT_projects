
import { useState } from "react"

function Card({valor2}) {
let [valor,setvalor] = useState(0)
let valor_numero = +valor2

function adcionarvalor() {

setvalor(valor + valor_numero )
}
const url ='https://tse2.mm.bing.net/th?id=OIP.FKnpMzE_eSZuzOH9IwSVKwHaEU&pid=Api&P=0&h=180'
    return (
        <div  className="card">
            <img className='img1' src={url} />
            <h1>{valor}</h1>
            <button onClick={adcionarvalor} >adcionar valor</button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus nostrum officiis, et optio quis fuga modi illo quasi expedita voluptatem corporis, iure perspiciatis earum? Iure totam dolor velit dolorum.</p>
        </div>

    )
}
export default Card