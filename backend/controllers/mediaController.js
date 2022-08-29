const Media = require('../Media/Media.js');


exports.getAll=async(req,res)=>{
    try{
        const media=await Media.find();
        res.json(media);
    }catch(error){
        console.log(error);
        res.status(4000).json(error);
    }

};

exports.create=async(req,res) => {
    const {name}=req.body;
    let videosPaths=[];
    
    if(Array.isArray(req.files.videos) && req.files.videos.length>0){
            for(let video of req.files.videos){
                console.log("--- ",video.path);
                videosPaths.push('/'+video.path);
            }
    }
   try{
        const createdMedia=await Media.create({
            name,
            video:videosPaths
        })
        res.json({message:'done task completed ',createdMedia});
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }

}