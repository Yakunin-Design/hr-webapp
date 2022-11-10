import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/svg/logo.svg';
import menu_icon from '@/assets/svg/menu.svg';

import './Header.css';

function Header(props) {
    return (
            <header className={'fuck u '}>
                <div className="--page-container">
                    <Link href="/" className="header__logo logo">
                        <Image className="logo__img" src={logo} alt="logo"/>
                        <h3 className="logo__title --ld">HR company</h3>
                    </Link>
                    <div className="header__nav nav">
                        <Link href="/">
                            <p className="nav__link">Найти работу</p>
                        </Link>
                        <Link href="/">
                            <p className="nav__link">Найти сотрудников</p>
                        </Link>
                        {!props.hide_button && (
                            <Link href="/">
                                <button className="nav__button --primary-btn">
                                    Войти
                                </button>
                            </Link>
                        )}
                    </div>
                    <Image
                        className="header__menu"
                        src={menu_icon}
                        alt="menu icon"
                    />
                </div>
            </header>

    );
}

export default Header;
