/*****************************************************************************
 * name: KKH
 * date: 2023-06-22
 * modify:
 * descript: 
 ****************************************************************************/
exports.indexRender = async(req, res, next) => {
  try{
      // res.locals.user = req.user;
      res.render('index');
  }catch(err){
      console.log("error in controllers/index_controller: indexRender: ", err);
      next(err);
  }
}

