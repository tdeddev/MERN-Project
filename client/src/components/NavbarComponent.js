const NavbarComponent=()=>{
    return(
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/" className="nav-link">หน้าแรก</a>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/create" className="nav-link">เขียนบทความ</a>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/login" className="nav-link">เข้าสู่ระบบ</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarComponent;