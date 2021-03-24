const router = require("express").Router();
let service = require("../Models/Service.Model");



// add service
router.route("/service").post((req,res)=>{
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Price = Number(req.body.Price);
    const Location = Array(req.body.Location);
    const Images = Array(req.body.Images);

    const newServices = new service ({
        Title,
        Description,
        Price,
        Location,
        Images
    });
    newServices.save()
    .then(() => res.json("Service SuccesFully Added"))
    .catch(err=>res.status(400).json('Error :' + err))
    
});
 
// delete service by id
router.route("/service/:id").delete((req , res)=>{
    service.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Service Deleted"))
    .catch(err=>res.status(400).json('Error :' + err))
});

//find by id 
router.route("/service/:id").get((req,res) =>{
    service.findById()
    .then(service =>res.json(service))
    .catch(err=>res.status(400).json('Error :' + err ))
});

// update service
router.route("/service/:id").post((req,res) =>{
    service.findById()
    .then(service =>{
        service.Title = req.body.Title;
        service.Description = req.body.Description;
        service.Price = Number(req.body.Price);
        service.Location = Array(req.body.Location);
        service.Images = Array(req.body.Images);

        service.save()
        .then(()=>res.json("Services Updated"))
        .catch(err=>res.status(400).json('Error :' +err))
    })
});

// search by service title
router.route("service/search/:Title").get((req,res)=>{
    let regex =  new RegExp(req.params.Title , "i");
    service.find({name:regex})
    .then(results => res.json(results))
    .catch(err=>res.status(400).json('Error :' +err))
});

module.exports = router;