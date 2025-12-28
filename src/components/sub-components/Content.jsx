function Content(){
    return <div className="content">
        <div className="moviePreview">

            <div className="trending">
                <div className="icon">
                    <img src="./trending1.png" alt="" />
                </div>
                <p>Trending</p>
            </div>

            <div className="genre">

            </div>

            <div className="movie">
                <h3 className="name">Adventure Baltigo!</h3>
                <p className="desc">On an heavy Adventure</p>
            </div>

            <div className="btns">
                <div className="watchNow">
                    <i class="ri-play-large-fill"></i>
                    <p>Watch now</p>
                </div>
                <div className="download">
                    <i class="ri-download-2-line"></i>
                </div>
                <div className="more">
                    <i class="ri-more-line"></i>
                </div>
            </div>

        </div>
        <div className="conWatch">
            <p className="watchHead">Continue Watching</p>
            <div className="remains">
                <div className="show"></div>
                <div className="show"></div>
                <div className="show"></div>
                <div className="show"></div>
                <div className="show"></div>
            </div>
        </div>
        <div className="recommdations"></div>
    </div>
}

export default Content;