function Shows({ head, images }) {


    return <div className="conWatch">
        <p className="watchHead">{head}</p>
        <div className="remains">

            {images.map((add) => {
                return <div className="show">
                    <img src={add} alt="" />
                </div>
            })}
        </div>
    </div>
}

export default Shows;