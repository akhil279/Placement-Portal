module.exports.home = function(req,res){
    return res.render('mainpage',{
        title:"Notification Centre",
    });
}