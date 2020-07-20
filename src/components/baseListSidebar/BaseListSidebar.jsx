import React from 'react';
import './BaseListSidebar.css';

function BaseListSidebar(props) {
    return (
        <div className="base-list-sidebar">
            <form style={{display: 'flex', flexDirection: 'column'}}> 
                <h4 style={{margin: '10px'}}>Price filter:</h4> 
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="price" 
                            value="option1" 
                            checked={props.selectedOption === "option1"}
                            onChange={props.handleChange} 
                            style={{marginLeft: '10px', marginRight: '10px'}}
                        /> 
                    No filter
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="price" 
                            value="option2" 
                            checked={props.selectedOption === "option2"}
                            onChange={props.handleChange} 
                            style={{marginLeft: '10px', marginRight: '10px'}}
                        /> 
                    {'<'} 60
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="price" 
                            value="option3" 
                            checked={props.selectedOption === "option3"}
                            onChange={props.handleChange} 
                            style={{marginLeft: '10px', marginRight: '10px'}}
                        /> 
                    60 - 100
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="price" 
                            value="option4"
                            checked={props.selectedOption === "option4"}
                            onChange={props.handleChange} 
                            style={{marginLeft: '10px', marginRight: '10px'}}
                        /> 
                    100 - 150
                    </label>
                </div>
                <div>
                <label>
                    <input 
                        type="radio" 
                        name="price" 
                        value="option5"
                        checked={props.selectedOption === "option5"}
                        onChange={props.handleChange} 
                        style={{marginLeft: '10px', marginRight: '10px'}}
                    /> 
                {'>'} 150
                </label>
            </div>                         
            </form>
        </div>
    );
};

export default BaseListSidebar;