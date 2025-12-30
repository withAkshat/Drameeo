import SideComp from "./SideComp";

const sideUpperEl = [
    { name: "Home", icon: <i class="ri-home-4-fill fill"></i> },
    { name: "Explore", icon: <i class="ri-compass-discover-line "></i> },
    { name: "Genres", icon: <i class="ri-list-indefinite"></i> },
    { name: "Favourites", icon: <i class="ri-bookmark-3-line"></i> }
]
const sideDipperEl = [
    { name: "Continue Watching", icon: <i class="ri-play-large-line"></i> },
    { name: "Recently Added", icon: <i class="ri-history-fill"></i> },
    { name: "My Collections", icon: <i class="ri-folder-5-line"></i> },
    { name: "Downloads", icon: <i class="ri-download-2-line"></i> }
]

function SideBar() {
    return <div className="sideBar">
        <div className="view">
            <div className="logoSec">
                <div className="logo">
                    <i class="ri-tv-line"></i>
                    <p className="name">Drameeo</p>

                </div>
                <i class="ri-menu-3-line"></i>
            </div>
        <SideComp el={sideUpperEl}/>
        <SideComp el={sideDipperEl}/>
        <div className="setting">
            <i class="ri-settings-4-line"></i>
            <p>Settings</p>
        </div>

        <div className="logout">
            <i class="ri-logout-box-r-line"></i>
            <p>Logout</p>
        </div>
        </div>

    </div>
}

export default SideBar;