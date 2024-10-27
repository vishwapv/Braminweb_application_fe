import React from 'react'
import '../App.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-item'>

                <div className='header-left'>
                    <ul>insta</ul>
                    <ul>twitter</ul>
                    <ul>facebook</ul>
                </div>
                <div className='header-right'>
                    <div>Login</div>
                    <div>AboutUs</div>
                </div>
            </div>
        </div>
    )
}

export default Header
