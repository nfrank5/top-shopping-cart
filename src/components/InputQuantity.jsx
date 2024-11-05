import { useState } from 'react'



function InputQuantity() {

  const [value, setValue] = useState(0);


  return (
    <>
      <label htmlFor="quantity">Quantity: </label>
      <input type="number"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              id="quantity"
              name="quantity"
              min="0"
              step="1" />
    </>
  );

  
}

export default InputQuantity;