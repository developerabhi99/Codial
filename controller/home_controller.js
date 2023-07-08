

const add=function(req,res){
    console.log("Inside home controller");
    return res.render('home',{
        title: "Home"
    });
}

const signUpPage=function(req,res){
    console.log("Inside SignUp controller");
    return res.render('signup',{
        title: "SignUp"
    });
}

module.exports = {
    add,
    signUpPage
};