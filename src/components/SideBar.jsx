import SideComp from "./SideComp";

const sideUpperEl = [
    { name: "Home", icon: <i class="ri-home-4-fill"></i> },
    { name: "Explore", icon: <i class="ri-compass-discover-line"></i> },
    { name: "Genres", icon: <i class="ri-list-indefinite"></i> },
    { name: "Favourites", icon: <i class="ri-bookmark-3-line"></i> }
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
        </div>

    </div>
}

export default SideBar;