var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var nodemailer = require('nodemailer');
var router=express.Router();
var app=express();
var router=express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',router);
    

app.use(morgan('dev'));
app.use(express.static(__dirname+'/www'));


//
router.post('/contact',handleMessage);
//


function handleMessage(req,res){
	var mailOptions = {
    from: req.body.email, // sender address
    to: 'hamza2mellah@gmail.com', // list of receivers
    subject: req.body.sujet, // Subject line
    text: ' ', // plaintext body
    html: '<b>EMAIL FROM: '+req.body.name+' ('+req.body.email+')<br/> '+req.body.message+'</b>' // html body
};
var transporter = nodemailer.createTransport("SMTP", {
						host: "smtp.gmail.com",
						secureConnection: true,
						port: 465,
						auth: {
								user: '',
								pass:''
						}});



transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    else{
    	res.write('Message sent');
    }
});
}



//




app.listen('8000',function(response){
	console.log('server starting');
  
	
})