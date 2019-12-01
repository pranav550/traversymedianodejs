/** 
 @desc   Get All Bootcamp 
 @route  Get  /api/v1/bootcamps
 @access Public
*/

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show All Records' });
};

/** 
 @desc   Get Single Bootcamp 
 @route  Get  /api/v1/bootcamps/:id
 @access Public
*/

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show Single Records' });
};

/** 
 @desc   Create New Bootcamp 
 @route  Post  /api/v1/bootcamps
 @access Private
*/

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create New Records' });
};

/** 
 @desc   Update Bootcamp 
 @route  Put  /api/v1/bootcamps/:id
 @access Private
*/

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Update Bootcamp' });
};

/** 
 @desc   Delete Bootcamp 
 @route  Delete  /api/v1/bootcamps/:id
 @access Private
*/

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Delete Records' });
};