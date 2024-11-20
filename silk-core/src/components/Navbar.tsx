import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/core.png';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <img src={image} alt="" width="30" height="24" className="d-inline-block align-text-top" />
            </div>
        </nav>
    )
}

export default Navbar;