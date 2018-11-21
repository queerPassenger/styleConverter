import React from 'react';
import Converter from './converter.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _:'',
        };

    }
    render(){
        return(
            <div className="style-converter-wrapper">
              <Converter />
            </div>
        )
    }
}
