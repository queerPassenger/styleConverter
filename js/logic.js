const match=require('../files/match.json');

function furnace(input,cb){
    console.log('furnaceInput',input.input);
    let cssStr=input.input;
    let cssKeyValSet=cssStr.split(';');
    let _cssKeyValStr='';
    for(let i=0;i<cssKeyValSet.length;i++){
      let [key,value]=cssKeyValSet[i].split(':');
      if(match[key]){
        _cssKeyValStr+=match[key]+":"+"'"+value.trim()+"'"+"\n";
      }
    }
    console.log('_cssKeyValStr',_cssKeyValStr);
    cb({status:true,output:_cssKeyValStr});
}
module.exports={furnace}
