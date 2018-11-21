import React from 'react';

class Converter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="converter-wrapper">
        <div className="converter-input">
          <textarea
            ref="input"
          />
        </div>
        <div className="converter-output">
          <textarea
            ref="output"
          />
        </div>
      </div>
    )
  }
}
export default Converter;
