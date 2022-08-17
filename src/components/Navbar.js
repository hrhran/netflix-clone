import React, {useEffect, useRef} from 'react'
import {ReactComponent as NavbarLogo} from '../media/logo.svg'
import {ReactComponent as SearchIcon} from '../media/search.svg'
import {ReactComponent as NotifyIcon} from '../media/notify.svg'
import ProfileIcon from'../media/pfp.png';

const Navbar = () => {
    const navbar = useRef()
    // const [color, setColor] = useState(false);

    const changeColor = e => {
        window.scrollY >= 100 ? navbar.current.classList.add('black') : navbar.current.classList.remove('black');
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
        window.removeEventListener('scroll', changeColor);
        };  
    }, []);

  return (
    <>
    {console.log("RENDERED")}
        <div ref={navbar} className='navbar'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <div className='nav-logo'>
                        <NavbarLogo />
                    </div>
                    <div className='nav-left-menu'>
                        <ul>
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>New & Popular</li>
                            <li>My List</li>
                        </ul>
                    </div>
                </div>
                <div className='nav-right'>
                        <ul>
                            <li><SearchIcon /></li>
                            <li>Children</li>
                            <li><NotifyIcon /></li>
                            <li><a className='profile-icon'><img src={ProfileIcon} alt='pfp' /></a></li>
                        </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar