/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: OCR
 ************************************************************************/
exports.ocrRender = (req, res, next) => {
  try{
    res.render('r&d/ocr');
  }catch(error){
    console.log("error in r&d/r&d_controller.js ocrRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: 엣지, 메인서버 CCTV 실시간 영상분석
 ************************************************************************/
exports.edgeCCTVRender = (req, res, next) => {
  try{
    res.render('r&d/edgeCCTV');
  }catch(error){
    console.log("error in r&d/r&d_controller.js edgeCCTVRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: 실시간 인구밀집도 분석
 ************************************************************************/
exports.populationDensityRender = (req, res, next) => {
  try{
    res.render('r&d/populationDensity');
  }catch(error){
    console.log("error in r&d/r&d_controller.js populationDensityRender :", error);
    next(error)
  }
}

/************************************************************************
 * name: 
 * date:
 * modify:
 * descript: LLM 기반의 요약 익스텐션
 ************************************************************************/
exports.extensionRender = (req, res, next) => {
  try{
    res.render('r&d/extension');
  }catch(error){
    console.log("error in r&d/r&d_controller.js extensionRender :", error);
    next(error)
  }
}