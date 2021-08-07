import express from 'express';
import {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from '../controllers/bootcampsController.js';

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
