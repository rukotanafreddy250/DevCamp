// @desc Get all bootcamps
// @route 



exports.getBootcamps = (req, res, next) =>{
    res.status(400).json({
        "success": false,
        msg: "Show all bootcamp"
    });
}