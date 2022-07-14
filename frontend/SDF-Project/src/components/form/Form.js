import React from "react";
import './Form.css';

function Form(){
    return(
        <div className="begin-form">
            <div className="form-container">
                <h1>Add Question</h1>
                <hr />
                <form>
                    <label for="Type">
                        Select the Question Type:
                    </label>
                    <br />
                    <select name="Type" id="dropdown">
                        <option>Sigle Correct Choice Type</option>
                        <option>Multi Correct Choice Type</option>
                    </select>
                    <br />
                    <label for="Question-Text">
                        Enter the Question
                    </label>
                    <br />
                    <textarea name="Question-Text" cols="100" rows="5" id="text"></textarea>
                    <br />
                    <label for="Option-1"> Enter Option 1</label>
                    <br />
                    <input name="Option-1"></input>
                    <br />
                    {/* <p>Correct or Incorrect?</p>
                    <input type="radio" name="opt1c">Correct</input>
                    <input type="radio" name="opt1i">Incorrect</input> */}
                    <label for="Option-2"> Enter Option 2</label>
                    <br />
                    <input name="Option-2"></input>
                    <br />
                    {/* <p>Correct or Incorrect?</p>
                    <input type="radio" name="opt2c">Correct</input>
                    <input type="radio" name="opt2i">Incorrect</input> */}
                    <label for="Option-3"> Enter Option 3</label>
                    <br />
                    <input name="Option-3"></input>
                    <br />
                    {/* <p>Correct or Incorrect?</p>
                    <input type="radio" name="opt3c">Correct</input>
                    <input type="radio" name="opt3i">Incorrect</input> */}
                    <label for="Option-4"> Enter Option 4</label>
                    <br />
                    <input name="Option-4"></input>
                    <br />
                    {/* <p>Correct or Incorrect?</p>
                    <input type="radio" name="opt4c">Correct</input>
                    <input type="radio" name="opt4i">Incorrect</input> */}
                    <br />
                    <label for="Correct-Answer">Enter the Option number of Correct Answer</label>
                    <br />
                    <input type="number" name="Correct-Answer" min="1" max="4"></input>
                    <br />
                    <input type="submit" value="submit" id="form-submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Form