import { Card } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Mealpurchase = ()=>{
   const {id,name} = useSelector((state)=>state.data)
   const navigate = useNavigate();
  
    return (
      <div style={{margin:"12%"}}>
      <Card title="Checkout Cart" style={{ width: 500,margin: '10%',textAlign:'center',background: "grey" }}>
      <p><b> Name</b>:{name?name:"No meal choosen"}</p>
      <p><b> MealId</b>:{id?id:"please choose meal"}</p>
      <p> <b>status</b>:{id?"Purchased":"please choose meal"}</p>

      {!id && <button onClick={()=>navigate('/')}>Go To HomePage</button>}
                 
          </Card>
      </div>
    );
}

export default Mealpurchase;