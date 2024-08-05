import { FaBell, FaHeart, FaHome, FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


function HeaderComponent() {
    return (
        <header className="header">
            <div className="container">
                <div className="grid d-flex align-items-center wide">
                    <div className="header-logo">
                        <Link path='/Home'>
                            <img src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/294464436_464978705632789_7664273957146312978_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE7Jh3Fq5sAQYPZ9jQfz3s-J-hn6pVlrR8n6GfqlWWtHxKH49ITIB6K8Y-miE8YVS0pnsBTWG0CVprBgx-CBlPS&_nc_ohc=szLX4IKJ3TsQ7kNvgFyDPZv&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDl4YK30ZW2mBaZHHjXpMNUx4C-3H_-GIhnQpIeVkmOeg&oe=66B2BD55" />
                        </Link>
                    </div>
                    <nav className="header-navbar">
                        <ul className="d-flex justify-content-space-around">
                            <li>
                                <Link to='/'>
                                    <FaHome />
                                    <span>Trang chủ</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Introduce'>
                                    <FaUser />
                                    <span>Giới thiệu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Notification'>
                                    <FaBell />
                                    <span>Thông báo</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Service'>
                                    <FaHeart />
                                    <span>Dịch vụ</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Contact'>
                                    <FaPhone />
                                    <span>Liên hệ</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;