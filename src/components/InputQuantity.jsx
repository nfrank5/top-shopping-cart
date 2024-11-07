
function InputQuantity({itemCount, setItemCount}) {

  return (
    <>
      <label htmlFor="quantity">Quantity: </label>
      <input type="number"
              value={itemCount}
              onChange={(event) => setItemCount(event.target.value)}
              id="quantity"
              name="quantity"
              min="0"
              step="1" />
    </>
  );

  
}

export default InputQuantity;