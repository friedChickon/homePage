const express = require('express');
const router = express.Router();

const rdController = require('../../controllers/r&d/r&d_controller');

router.get('/ocr', rdController.ocrRender);
router.get('/edgeCCTV', rdController.edgeCCTVRender);
router.get('/populationDensity', rdController.populationDensityRender);
router.get('/extension', rdController.extensionRender);

module.exports = router;