import { useState } from "react";

export default function MesinKetikan() {
    const [teks, setTeks] = useState('');

    function tangkapKetikan(event) {
    setTeks(event.target.value);
    }
    
    return(
        <div style={{border: '2px solid black', padding: '20px', width: '300px'}}>
            <h2>Monitor Input</h2>
            <input 
                type="text" 
                value={teks}
                onChange={tangkapKetikan}
                placeholder="Ketik sesuatu disini..."
            />
            <button onClick={() => setTeks('')}>Reset</button>
            <p>Data di berankas react saat ini:</p>
            <h3 style={{color:"blue"}}>{teks}</h3>
        </div>
    );
}