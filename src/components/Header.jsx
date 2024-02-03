import './Header.css'
import logo from '/logo.png'

const Header = () => {
  return (
    <header className='header'>
{        <img className='logo' src={logo} alt='logo futurama'/>}
        <h1 className='title'> API</h1>
    </header>
  )
}

export default Header
