import Shows from "./Shows";

const upperImages = [
  "./upper/1.webp",
  "./upper/2.jpg",
  "./upper/3.jpg",
  "./upper/4.jpeg",
  "./upper/5.jpg",
  "./upper/6.png",
  "./upper/7.jpg",
  "./upper/8.jpg",
  "./upper/9.jpg",
  "./upper/10.jpg",
  "./upper/11.webp",
  "./upper/12.jpg"
];

const dipperImages = [
  "./dipper/2.jpg",
  "./dipper/3.png",
  "./dipper/4.webp",
  "./dipper/6.jpg",
  "./dipper/7.jpg",
  "./dipper/8.jpg",
  "./dipper/9.jpg",
  "./dipper/10.jpg",
  "./dipper/11.jpg"
];

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
                    <div className="btn">
                        <i class="ri-play-large-fill"></i>
                        <p>Watch now</p>

                    </div>
                </div>
                <div className="download">
                    <i class="ri-download-2-line"></i>
                </div>
                <div className="more">
                    <i class="ri-more-line"></i>
                </div>
            </div>

        </div>
       <Shows head="Continue Watching" images={upperImages} />
       <Shows head="You Might Like" images={dipperImages}/>
        
    </div>
}

export default Content;