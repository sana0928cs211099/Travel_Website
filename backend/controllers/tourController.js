
import Tour from '../models/Tour.js'


//create a new tour

export const createTour = async (req, res) => {

    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.status(200).json({success:true, message:'Successfully Created', data:savedTour});

    } catch (err) {

        res.status(500).json({success:false, message:'Failed to create. Try again'});
        
    }
};

//update tour

export const updateTour = async (req, res) => {

    const id = req.params.id

    try {

        const updatedTour = await Tour.findByIdAndUpdate(id, {$set: req.body}, {new:true});

        res.status(200).json({success:true, message:'Successfully Updated', data:updatedTour,});
       
    } catch (err) {

        res.status(500).json({success:false, message:'Failed to update',});

    }
};

//Delete tour

export const deleteTour = async (req, res) => {

    const id = req.params.id

    try {

        await Tour.findByIdAndUpdate(id,);

        res.status(200).json({success:true, message:'Successfully Deleted',});
       
    } catch (err) {

        res.status(500).json({success:false, message:'Failed to delete',});

    }
};

//Get Single tour

export const getSingleTour = async (req, res) => {

    const id = req.params.id

    try {

        const tour = await Tour.findById(id).populate("reviews");

        res.status(200).json({success:true, message:'Successfully Fetched', data:tour});
       
    } catch (err) {

        res.status(404).json({success:false, message:'Failed to fetch',});

    }
};

//GetAll tour

export const getAllTour = async (req, res) => {

    //pagination
    const page = parseInt(req.query.page)

    try {

        const tours = await Tour.find({}).populate("reviews").skip(page * 8).limit(8);

        res.status(200).json({success:true, count:tours.length, message:'Successfully Fetched All', data:tours});
       
    } catch (err) {

        res.status(404).json({success:false, message:'Failed to fetch',});

    }
};

// get tour by search
export const getTourBySearch = async(req, res) => {

    const city = new RegExp(req.query.city, 'i')

    const distance = parseInt(req.query.distance)

    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {

        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}});

        res.status(200).json({success:true, message:'Successfully Fetched By Search', data:tours});
        
    } catch (err) {

        res.status(404).json({success:false, message:'Failed to fetch by search',});
        
    }

};


//Get Featured tour

export const getFeaturedTour = async (req, res) => {

    try {

        const tours = await Tour.find({featured: true }).populate("reviews").limit(8);

        res.status(200).json({success:true, message:'Successfully Featured All', data:tours});
       
    } catch (err) {

        res.status(404).json({success:false, message:'Failed to feature',});

    }
};

//get tour counts

export const getTourCount = async (req, res) => {

    try {

        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success:true, message:'Successfully Fetched Counts', data:tourCount});
       
    } catch (err) {

        res.status(500).json({success:false, message:'Failed to fetch counts',});

    }
};
