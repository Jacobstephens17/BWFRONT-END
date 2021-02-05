import React, {useState} from 'react'
import styled from 'styled-components'

const initialRecipe = {
    recipe_name: "",
    author: "",
    category: "",
    time: "",
    ingredients: "",
    steps:""
}
function RecipeCard(props) {
    const [editing, setEditing] = useState(false);
    const [rcipeToEdit, setRecipeToEdit] = useState(initialRecipe)
    return (
        <CardDiv>
            {props.recipe.author}<br></br>
            {props.recipe.recipe_name}<br></br>
            {props.recipe.category}<br></br>
            {props.recipe.ingredients}<br></br>
            {props.recipe.steps}<br></br>
            {props.recipe.time}<br></br><br></br>
            <button onclick = {()=>{}}>Edit</button>
            <button onClick = {()=> {return <form><input></input></form>}}>Delete</button>
            <hr></hr>
        </CardDiv>
    )
}

export default RecipeCard

const CardDiv = styled.div`
    width: 35%;
    padding:100px 2.5%;
    border-radius: 8px;
`
