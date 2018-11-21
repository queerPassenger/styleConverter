const {furnace}=require('./js/logic.js');

function apiReceiver(_payload,cb){
  furnace(_payload,cb);
}
module.exports={apiReceiver};
