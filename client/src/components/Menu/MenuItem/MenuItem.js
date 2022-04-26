import './MenuItem.css';

const MenuItem = ({
    id,
    onClick,
    children,
}) => {
    return (
        <li className="menu-item">
            <a href="#" onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    )
};

export default MenuItem;