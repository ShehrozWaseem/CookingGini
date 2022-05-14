import React, { useState, useRef } from "react";
// import { useFetch } from "../../hooks/useFetch";
import {useHistory} from 'react-router-dom'
import "./create.css";
import { projFirestore } from "../../firebase/config";
function Create({editCheck,data}) {
  console.log(data)
  const [title, setTitle] = useState(editCheck?data.title:"");
  const time = editCheck?data.cookingTime.replace(' minutes',''):'';
  const [cookingTime, setTime] = useState(time);
  const [method, setMethod] = useState(editCheck?data.method:"");
  const [new_ingredient, setIng] = useState("");
  const [ingredients, setAllIng] = useState(editCheck?data.ingredients:[]);
  

  const [show, setShow] = useState(false);

  const IngRef = useRef();
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    };
    try{
      if(!editCheck){
        await projFirestore.collection('recipes').add(doc)
        history.push('/')}
      if(editCheck){
        //code here to update doc
        await projFirestore.collection('recipes').doc(data.id).update(doc)
        history.push('/')
      }
    }
      
    catch(err){
      console.log(err)
    }
  };

  const addtoIng = (e) => {
    e.preventDefault();
    const ing = new_ingredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setAllIng((prevIngredient) => [...prevIngredient, ing]);
      setShow(false);
      IngRef.current.focus();
      setIng("");
    }
    if (ingredients.includes(ing)) {
      setShow(true);
      IngRef.current.focus();
    }
  };
  const deleteItem = (item) =>{
    const NotDeletedIngredients = ingredients.filter((toKeep)=>{
      return toKeep !== item
    })
    setAllIng(NotDeletedIngredients)
  }

  const extracted_ing = ingredients.map((i) =>(

   editCheck? 
   <em key={i} className='changeArray' onClick={()=>deleteItem(i)}>{i}   </em>:
   <i key={i}>{i} </i>

  ));
  return (
    <div className="create">
      <form onSubmit={submitHandler}>
        <label>
          <span>{editCheck? "Update Title":"Title"}</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>{editCheck? "Update Ingredients":"Ingredients"}</span>
          {show && <h6>Ingredient already added !</h6>}
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setIng(e.target.value)}
              value={new_ingredient}
              ref={IngRef}
            />
            <button className="btn" onClick={addtoIng}>
              Add
            </button>
          </div>
          <p>Current Ingredients: {extracted_ing}</p>
          {editCheck && <p>Click on an ingredient to delete it</p>}
        </label>

        <label>
          <span>{editCheck? "Update Cooking Time (Minutes)":"Cooking Time (Minutes)"}</span>
          <input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <label>
          <span>{editCheck? "Update Method":"Method"}</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <button type="submit">{editCheck? "Edit":"Submit"}</button>
      </form>
    </div>
  );
}

export default Create;
