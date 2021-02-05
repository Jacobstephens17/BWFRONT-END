import React, {useState} from 'react'
import axios from "axios"
import styled from 'styled-components';

//recipe_id
//recipe_name
//author
//category
//time
//img
//recipe_private T or F

// (/api/recipes) post/get
//(/api/recipies/:${id}) put/delete

//step_id
//step_text
//step_order (null)


//ingredient_name
//ingredient_id

//step_ingredients  yakes in step and ingredient id
//ingredient_quantity fuck

const initialFormValues = {
    recipe_id:null,
    recipe_name: "",
    author: "",
    category: "",
    time: "",
    recipe_private: false,
    ingredients: "",
    steps:""
}

function RecipeForm() {

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        })
      }

      const onSubmit = (e) => {
          e.preventDefault();
          axios.post("https://secret-family-recipes-be.herokuapp.com/api/recipes", formValues)
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
      }

    return (
        <StyledContainer>
            <StyledForm onSubmit = {onSubmit}>
                <label>Recipe Name: 
                    <input className="inputs" 
                    type = "text"
                    name = "recipe_name"
                    values = {formValues.recipe_name}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Name: 
                    <input className="inputs" 
                        type = "text"
                        name = "author"
                        values = {formValues.author}
                        onChange = {handleChange}/>
                </label><br></br>
                <label>Category: 
                    <input className="inputs"
                        type = "text"
                        name = "category"
                        values = {formValues.category}
                        onChange = {handleChange} />
                </label><br></br>
                <label>Time: 
                    <input className="inputs" 
                        type = "text"
                        name = "time"
                        values = {formValues.time}
                        onChange = {handleChange}/>
                </label><br></br>
                <label>Ingredients: 
                    <input className="inputs" 
                        type = "text"
                        name = "ingredients"
                        values = {formValues.ingredients}
                        onChange = {handleChange}/>
                </label><br></br>
                <label>Steps: 
                    <input className="inputs" 
                        type = "text"
                        name = "steps"
                        values = {formValues.steps}
                        onChange = {handleChange}/>
                </label>
                <button>Submit</button>
            </StyledForm>
        </StyledContainer>
    )
}

export default RecipeForm

const StyledContainer = styled.div`
    width: 40vw;
    height: 60vh;
    position: absolute;
    top: 6%;
    left: 28%;
    display: flex;
    align-items: center;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: black 3px solid;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  width: auto;
  .warning {
    color: red;
    font-weight: bold;
  }
  .inputItem {
    margin: 0.5rem;
  }
  .inputTerms {
    margin: 0.5rem 0.5rem 0 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .inputItem label {
    float: left;
  }
  .inputItem input {
    width: 100%;
    margin-top: 0.5rem;
    box-sizing: border-box; // needed to make input box fit inside div
  }
  .inputItem button {
    float: right;
    width: 5rem;
  }
`;