/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: company
 ************************************************************************/
exports.companyRender = (req, res, next) => {
  try{
    res.render('about/company');
  }catch(error){
    console.log("error in about/about_controller.js companyRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: partner
 ************************************************************************/
exports.partnerRender = (req, res, next) => {
  try{
    res.render('about/partner');
  }catch(error){
    console.log("error in about/about_controller.js partnerRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: map
 ************************************************************************/
exports.mapRender = (req, res, next) => {
  try{
    res.render('about/map');
  }catch(error){
    console.log("error in about/about_controller.js mapRender :", error);
    next(error)
  }
}