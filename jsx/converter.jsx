import React from 'react';
import {updateState} from '../js/helper.js';

class Converter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      _:'',
    }
  }
  convert(){
    let input=this.refs['input'].value;
    //Removing new line
    input=input.replace(new RegExp('\n','g'),'');
    input=input.replace(new RegExp('  ','g'),'');
    console.log('input',input);
    let xmlhttp = new XMLHttpRequest();
    let self=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var resultSet=JSON.parse(this.responseText);
          if(JSON.parse(resultSet.status)){
              self.refs['output'].value=resultSet.output;
              console.log('updating');
              updateState(self);
          }
              else{
                  alert('Something went wrong . Please try again');
              }
        }
        };
    xmlhttp.open("POST", "/convert",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({input}));
  }
  render(){
    console.log('Render');
    return(
      <div className="converter-wrapper">
        <div className="converter-input">
          <textarea
            ref="input"
          />
        </div>
        <div className="converter-btn">
          <button
            onClick={this.convert.bind(this)}
          >
          Convert
          </button>
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
