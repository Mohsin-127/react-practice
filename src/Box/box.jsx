import '../Box/box.css'


export default function Box({number,name,age,imgUrl}){
   
    return (
        <div className="box" >
            <p>{number}</p>
            <p>{name}</p>
            <p>{age}</p>
            <img src={imgUrl} alt="images" />
        </div>
    )
}