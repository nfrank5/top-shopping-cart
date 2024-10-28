import reactLogo from '../assets/react.svg'

function NavigationBar(){
  return (
    <div>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <h1>React Shopping Cart</h1>
  </div>
  )
}

export default NavigationBar;