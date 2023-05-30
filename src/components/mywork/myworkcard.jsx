
import image1 from "../../assest/mywork/hehe2.jpg"
import image2 from "../../assest/mywork/hehe33.jpg"
import image3 from "../../assest/mywork/heheh5.jpg"
import image4 from "../../assest/mywork/hehehe.jpg"
import "./myworkcard.css"
const Myworkcard = () => {
    const images=[{
        image:image1,
        cName:"image1",
      },{
        image:image2,
        cName:"image2",
      },
      {
        image:image3,
        cName:"image3",
    
      },
      {
        image:image4,
        cName:"image4",
      }
    
    ]
  return (
    <div>
<div className='image-container-mywork'>
{images.map((image,index)=>(
 <img src={image.image} alt="" className={image.cName}/>

 ))
    
}
</div>  
    </div>
  )
}

export default Myworkcard
