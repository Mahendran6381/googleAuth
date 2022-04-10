const express = require('express')
const app = express()
const PORT = 5000 || process.env.PORT
const { google } = require('googleapis')
app.set('view engine','ejs')
const googleConfig = {
    clientId:"834442151373-1s1g1l07v7ktekrlqbduiorjekio6jif.apps.googleusercontent.com",
    clientSecret:"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",
    redirect:"http://localhost:5000/auth"
}

const createConnection  = () =>{
    const auth = new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    )
    return auth
}

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
  ];  

const getConnectionURL = (auth) =>{
    return auth.generateAuthUrl({
        accessType:'offline',
        promot:'consent',
        scope:defaultScope
    })
}

const urlGoogle = () =>{
    const auth = createConnection()
    const url = getConnectionURL(auth)
    return url
}

const getGooglePlusAPI = (auth) =>{
    return google.plus({version:'v1',auth})
}
const googleLoginURL = urlGoogle()
// console.log(googleLoginURL)

app.get('/',(req,res)=>{
    res.render('index.ejs',{urlData:googleLoginURL})
})


const getGoogleAccountDetails =async (code) =>{
    const data =await auth.getToken(code)
    const tokens = data.tokens;
    const auth = createConnection();
    auth.setCredentials(tokens)
    const plus = getGooglePlusAPI(auth)
    const me = await plus.people.get({userId:'me'});
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails
    return {
        id:userGoogleId,
        email:userGoogleEmail,
        tokens:tokens
    };
}

app.get('/auth',(req,res)=>{
    console.log(req.query.code)
    console.log(getGoogleAccountDetails(req.query.code))
    res.json(getGoogleAccountDetails(req.query.code))
})
app.listen(PORT ,(err)=>{
    if(!err){
        console.log(`The Server Connected to Port ${PORT}`)
    }else{
        console.log(err)
    }

})