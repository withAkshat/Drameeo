function SideComp({el}){
    console.log(el);
    
    return <div className="sideComp">

        {el.map((elem, idx)=>{
          return  <div key={idx} className="option">
                <i class={elem.icon.props.class}></i>
                <p>{elem.name}</p>
            </div>
        })}
            
    </div>
}

export default SideComp;