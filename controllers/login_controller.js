module.exports.home = function(req,res){
    return res.render('login',{
        title:"Login",
    });
}