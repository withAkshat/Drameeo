function Nav(){
    return <nav>
        <div className="navLeft">
            <div className="search">
                <label htmlFor="search">
                    <i class="ri-search-line"></i></label>
                <input type="text" id="search" placeholder="Search for films, directors, actors..."/>
            </div>
        </div>
        <div className="navRight">
            <div className="notification">
                <i class="ri-notification-3-fill"></i>
            </div>
            <div className="profile">
                <img src="/proflie.jpg" alt="" />
            </div>
        </div>
    </nav>
}

export default Nav;