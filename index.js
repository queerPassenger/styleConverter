const {mailer}=require('./mail.js');
const toMail=['queerpassenger@gmail.com','engin.airz@gmail.com'];

const surveySubmit=(_payload,cb)=>{
    mailer(_payload.htmlStr,toMail,'Survey Taken',(flag)=>{
        if(flag==='success'){
            surveyAck(_payload);
            let json={status:true};
            cb(json);
        }
        else{
            let json={status:false};
            cb(json);
        }
    });
};
const surveyAck=(_payload)=>{
    let r = Math.random().toString(36).substring(7);
    let htmlStr='<div><h4>Thanks for Successfully submitting the online feedback form!!!In response to your collaboration with us, we would like to offer you 5-digit coupon code to your registered mail ID.Please use this coupon code to avail 20% discount on all future projects with us.Kindly visit our website www.enginairz.in to know what we do. For any further info/queries, mail us at engin.airz@gmail.com or  call us at +91-9952727811</h4><h2>'+r+'</h2></div>';
    mailer(htmlStr,_payload.customerMail,'Thanks for taking the survey',(flag)=>{

    });
};

module.exports={surveySubmit};
