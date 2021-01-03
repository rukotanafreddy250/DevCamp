// @desc     Get all bootcamps   
// @route    GET /api/v1/bootcamps  
// @access   Public
exports.getBootcamps = (req, res, next) =>{
    res.status(400).json({
        "success": false,
        msg: "Show all bootcamp"
    });
}
          
       
// @desc     Get a single bootcamps   
// @route    GET /api/v1/bootcamps/:id 
// @access   Public
exports.getBootcamp = (req, res, next) =>{
    res.status(400).json({     
        "success": false,   
        msg: `Get A BootComp ${req.params.id}`  
    });       
}    
         

// @desc c   create a single bootcamps      
// @route    POST /api/v1/bootcamps      
// access    Private     
exports.createBootcamp = (req, res, next) =>{
    res.status(400).json({
        "success": false,
        msg: "Create New BootCamp"
    });
}


// @desc c   create a single bootcamps   
// @route    PUT /api/v1/bootcamps/id
// access    Private
exports.UpdateBootcamp = (req, res, next) =>{
    res.status(400).json({
        "success": false,
        msg: `Update A BootComp ${req.params.id}`
    });
}



// @desc c   create a single bootcamps   
// @route    DELETE /api/v1/bootcamps/id
// access    Private
exports.deleteBootcamp = (req, res, next) =>{
    res.status(400).json({
        "success": false,
        msg: `Delete A BootComp ${req.params.id}`
    });
}



   



