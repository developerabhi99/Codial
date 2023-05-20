

const add=function(req,res){
    console.log("Inside home controller");
    return res.render('home',{
        title: "Home"
    });
}

module.exports = {
    add
};