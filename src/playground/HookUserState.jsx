import { useState } from "react";

function Contador(){
    const [count, setCount] = useState(0);

    function aumentar(){
        setCount(count+1);
    }

     function disminuir(){
        setCount(count-1);
    }

    return(
        <div className="container text-center">
            <div>
                <h1>Contador: {count} </h1>
                <div className="btn-group">
                    <button onClick={aumentar} className="btn btn-success">Aumentar</button>
                    <button onClick={disminuir} className="btn btn-warning">Disminuir</button>

                </div>
            </div>
        </div>

    );
}

export default Contador;