import axios from "axios";
import './meals.css';
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Meals = () => {

  const [mealdata, setMealdata] = useState([]);
  const [loading,setLoading] = useState(true)
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) =>
        
        
         setMealdata(res.data.meals),
  
      ).then(()=>setLoading(false))
  },[]);

 const getlist=(id)=>{
   navigate('/details',{state:id})
  }

  const mealsearch = (e)=>{
       let searchname = e.target.value;
       axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchname}`).then((res)=> setMealdata(res.data.meals))
  }
  return (
    < >
    <div className="mealtop">
    <h3>Meal Shop</h3>
    <input type='search' placeholder="Search" onChange={(e)=>mealsearch(e)}/>
    </div>
    <div className="mealcontainer">
      
     { loading?<div style={{alignItems:"center",justifyContent:"center",  margin:"auto"}}>"Loading please wait"</div>:mealdata.map((meals) => {
      return  <Card key={meals.idMeal}
          style={{
            width: 200,
            margin:10,
          }}
          onClick={()=>getlist(meals.idMeal)}
        >
          <img className="mealimg" src={meals.strMealThumb}/>
          <p>{meals.strMeal}</p>
        </Card>;
      })}
      </div>
    </>
  );
};

export default Meals;
