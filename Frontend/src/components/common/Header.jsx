import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="logo-item">
                    <img src={logo} alt="logo" />
                </div>
                {/* <h1 className="logo">{logo}</h1> */}
                <nav>
                    <ul>
                        <li>
                            <button>로그인</button>
                        </li>
                        <li>
                            <button>회원가입</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
