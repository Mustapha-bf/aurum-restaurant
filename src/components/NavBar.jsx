import { MdOutlineMenu, IoCloseSharp } from '../icons';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="nav-bar">
            <div className="logo">AURUM</div>
            <div className="nav-links">
                <a href="#home">HOME</a>
                <a href="#story">STORY</a>
                <a href="#menu">MENU</a>
            </div>
            <div className="reserve-btn"><a href="#reserve">RESERVE</a></div>
            <MdOutlineMenu size={40} className="links-btn" onClick={() => { setOpen(!isOpen) }} />
            {isOpen && (
                <div className="listings">
                    <div className='explore-more'>
                        <p>Expore More</p>
                        <IoCloseSharp size={25} onClick={() => { setOpen(!isOpen) }} />
                    </div>
                    <div className="links-list">
                        <a href="#home" onClick={() => { setOpen(!isOpen) }}>HOME</a>
                        <a href="#story" onClick={() => { setOpen(!isOpen) }}>STORY</a>
                        <a href="#menu" onClick={() => { setOpen(!isOpen) }}>MENU</a>
                        <a href="#experience" onClick={() => { setOpen(!isOpen) }}>EXPERIENCE</a>
                    </div>
                    <div className="reserve-button" onClick={() => { setOpen(!isOpen) }}><a href="#reserve">RESERVE</a></div>
                </div>
            )}
        </div>
    )
}

export default NavBar