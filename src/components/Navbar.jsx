import {Link} from 'react-router-dom';

function Navbar() {
    return(
        
        <nav className="flex gap-6">
            <Link to="/" className='bg-blue-500 text-white p-2 rounded'>Home</Link>
            <Link to="/favorites"  className='bg-blue-500 text-white p-2 rounded'>Favorites</Link>
            <Link to="/Search" className=' bg-blue-500 text-white p-2 rounded'>Search</Link>
        </nav>
    );
}

export default Navbar;
