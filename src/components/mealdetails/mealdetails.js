import axios from "axios";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addcart } from "../redux/mealslice";


const Mealdetails = ()=>{
    const { state } = useLocation();
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const [mealdetails,setMealdetails] = useState([]);
    console.log(state)
    useEffect(() => {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state}`)
        .then((res) => setMealdetails(res.data.meals))
    },[]);
  
   const getlist=(id,name)=>{
    dispatch(addcart({id,name}))
    navigate('/purchase',{state:id});
          
     console.log(id);
    }
    return (
      <>
      <div className="mealcontainer">
        {mealdetails.map((details) => {
        return <div>
         <Card key={details.idMeal}
            style={{
              width: 200,
              justifyContent:"center"
            }}
            onClick={()=>getlist(details.idMeal)}
          >
            <img className="mealimg" src={details.strMealThumb}/>
            <p>{details.strMeal}</p>
          </Card>
            <p> category : {details.strCategory}    </p>  
           <p> Instructions :{details.strInstructions}</p>
           <button onClick={()=>getlist(details.idMeal,details.strMeal)}>Purchase</button>
           
        </div>
        })}
        </div>
      </>
    );
}

export default Mealdetails;