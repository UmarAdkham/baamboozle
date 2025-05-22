import React, { useEffect, useMemo, useState } from "react";

function Memo() {
  const [oylik, setOylik] = useState(1000);
  // const [sofOylik, setSofOylik] = useState();
  const [counter, setCounter] = useState(1);

	
  const handleOylik = () => {
    setOylik(oylik * 1.1);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };
	
  // useEffect(() => {
		// 	console.log("USE EFFECT");
		// 	setSofOylik(oylik - (oylik / 100 * 12))
		// }, [oylik]);
		
	console.log("RENDER");
	const sofOylik = () => {
		for (let i = 0; i < 10; i++) {
			console.log(i);
		}
		return oylik - (oylik * 0.12)
	}

  return (
    <div>
      <h1>Memo</h1>
      <h2>Oylik: {oylik}</h2>
      <h2>Sof oylik: {sofOylik}</h2>
      <h2>Counter: {counter}</h2>

      <button onClick={handleOylik}>Change oylik</button>
      <button onClick={handleCounter}>Increment</button>
    </div>
  );
}

export default Memo;
