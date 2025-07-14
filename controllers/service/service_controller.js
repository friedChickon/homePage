/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: 스마트 패턴 장부
 ************************************************************************/
exports.accountRender = (req, res, next) => {
  try{
    res.render('service/account');
  }catch(error){
    console.log("error in service/service_controller.js accountRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: 질병 재발 예측 서비스
 ************************************************************************/
exports.diseaseRender = (req, res, next) => {
  try{
    res.render('service/disease');
  }catch(error){
    console.log("error in service/service_controller.js accountRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: 두비덥 서비스
 ************************************************************************/
exports.dobedubRightsRender = (req, res, next) => {
  try{
    res.render('service/dobedubRights');
  }catch(error){
    console.log("error in service/service_controller.js accountRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: P Storage
 ************************************************************************/
exports.PStorageRender = (req, res, next) => {
  try{
    res.render('service/PStorage');
  }catch(error){
    console.log("error in service/service_controller.js accountRender :", error);
    next(error)
  }
}