const User = require('../models/user');

const profile = function(req,res){
  //  res.end("<h1>Inside user profile</h1>");

  console.log(req.cookies);

  User.findOne({_id:req.cookies.user_id})
  .then(
    (user)=>{

        console.log(user);
        if(user){
             res.render('profile',{
               title:user.name +"'s Profile",
               data : user
               
            })
        }else{
            // return res.redirect('back');
        }
    }
  )
  .catch((err) => {
    //When there are errors We handle them here

console.log(err);
    res.send(400, "Bad Request");
});
}

const signUpPage=function(req,res){
    console.log("Inside home controller");
    return res.render('signup',{
        title: "SignUp"
    });
}

const signInPage=function(req,res){
    console.log("Inside sign in controller");
    return res.render('signin',{
        title: "SignIn"
    });
}

const create=function(req,res){

    const{email,password,c_password,name}=req.body;

    if(password!=c_password){
        return res.redirect('back');
    }

    User.findOne({email:email})
    .then((foundUser) => {

        console.log(foundUser);
        if(!foundUser){
            let user=  User.create(
                {
                 email:email,
                 password:password,
                 name:name
                }
           );

           return res.redirect('/user/signIn');

        }else{
            return res.redirect('back');
        }
   })
   .catch((err) => {
       //When there are errors We handle them here

console.log(err);
       res.send(400, "Bad Request");
   });


//     try{

   

      

//     }catch(err){
//   console.log(error);
//     }

 






};

const signIn= function(req,res){

    console.log("Inside Login in");


    User.findOne({email:req.body.email})
    .then( (user)=>{

        if(user){

           

            if(user.password!=req.body.password){
                return res.redirect('back');
            }
 
            console.log("correct Password");
            res.cookie('user_id',user.id);

            return res.redirect('/user/profile');

        }else{
            return res.redirect('back');
        }
    }

    )
    .catch((err) => {
        //When there are errors We handle them here
 
 console.log(err);
        res.send(400, "Bad Request");
    });

}

const signout = function(req,res){

    res.clearCookie("user_id");
    res.end();

    return res.redirect('/user/login');
}

module.exports = {
    profile,
    signUpPage,
    signInPage,
    create,
    signIn,
    signout
};