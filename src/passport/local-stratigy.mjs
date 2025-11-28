import passport from "passport";

//check more about passport in doc

// the stragy can be for google faceboob etc, but is one is local
import { Strategy } from "passport-local";

import userInfos from "./mock.mjs";



//what ever is been pass will be pass to the deciraliswd and it have to be uinique

//this fn stor the userId to our session

// this fn is been called the moment user login and store value to session
// the decerailed get the id from thier
passport.serializeUser((user,done)=>{
    console.log('inside serialize user')
    console.log(user)

    done(null,user.id)
})



// this fn upack the user of the id aka get info about the user with the id
//then it store it to the req object

// the fn is been called after the user login or is authenticated
passport.deserializeUser((id,done)=>{
    console.log('inside deserialize user')
    console.log(id)

    try {
        const findUser =  userInfos.find((user)=> user.id === id);
     if(!findUser) throw new Error('404 user not found')
        done(null,findUser)
    } catch (error) {
        
    }

})











export default passport.use(
    //pass in the stratygy instance in here
    new Strategy((username,password,done)=>{
        console.log(`username: ${username}`)
        console.log(`password: ${password}`)
// here we use it to check the userinfo with the one in db


        try {
            const findUser =  userInfos.find((user)=> user.username === username);
         if(!findUser) throw new Error('404 user not found')
if(findUser.password !== password)throw new Error('invalid credencials')
    // now we call the done fn it accept two parram  first is for err seconed is for result founds
done(null,findUser)
        } catch (error) {
            done(error,null)
        }
    })
)