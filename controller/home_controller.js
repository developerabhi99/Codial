

const add=function(req,res){
    console.log("Inside home controller");
    return res.end('<h1>From home controller</h1>');
}

module.exports = {
    add
};