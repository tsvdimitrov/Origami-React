import style from './Header.module.css';
import NavigationItem from './NavigationItem';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
               
            </ul>
        </nav>
    );
};

export default Header;