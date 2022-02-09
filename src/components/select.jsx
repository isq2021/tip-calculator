import React, { Component } from 'react';

class select extends Component {
    render(props) {
        return (
            <>
            <select value ={this.props.value} onChange ={ this.props.onChange}>
                {
                    this.props.option.map((e ,index)=> {
                        
                        return (
                            <>
                            <option value={index}> {e} good </option>
                            <option value={index}> {e}  norma </option>
                            <option value={index}> {e} norm </option>
                            <option value={index}> {e} good bye!</option>
                            
                            </>
                            

                        )

                        
                    })
                }
                   
                </select>
                
            </>
        )
    }
}

export default select;