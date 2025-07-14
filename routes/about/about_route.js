const express = require('express');
const router = express.Router();

const aboutController = require('../../controllers/about/about_controller');

router.get('/company', aboutController.companyRender);
router.get('/partner', aboutController.partnerRender);
router.get('/map', aboutController.mapRender);

module.exports = router;