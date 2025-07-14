const express = require('express');
const router = express.Router();

const serviceController = require('../../controllers/service/service_controller');

router.get('/account', serviceController.accountRender);
router.get('/disease', serviceController.diseaseRender);
router.get('/dobedubRights', serviceController.dobedubRightsRender);
router.get('/PStorage', serviceController.PStorageRender);

module.exports = router;