// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
const getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'show all bootcamps' });
};

// @desc        Get specified bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
const getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `show bootcamp with id:${req.params.id}`,
  });
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
const createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'create new bootcamp' });
};

// @desc        Update specified bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
const updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `update bootcamp with id: ${req.params.id}`,
  });
};

// @desc        Delete specified bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
const deleteBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    message: `delete bootcamp with id:${req.params.id}`,
  });
};

export {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
