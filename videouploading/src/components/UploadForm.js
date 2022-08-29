import React, { useState } from "react"
import axios from 'axios';
import { BACKEND_URI } from "../config/Constants";

const UploadForm=({getAllMedia})=>{

    const[name,setName]=useState("");
    const[videos,setVideos]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(videos);
        let formdata=new FormData();
        for (let key in videos){
            formdata.append("videos",videos[key])
        }
        formdata.append("name",name);
        
        axios.post(`${BACKEND_URI}/api/v1/media/create`,formdata).
            then(sucess=>{
                //calling the method as a hooks or props 
                getAllMedia();
                alert('saved')
        }).catch(error=>{
            console.log(error);
            alert('Error');
        })

    }
    return(<>
            
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" name="name" value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    className="form-control"/>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Video</label>
                    <input type="file" id="videos" name="videos" multiple
                    onChange={(e)=>setVideos(e.target.files)}
                    className="form-control" accept=".mp4,.mkv"/>
                    
                </div>
                <br/>
                <button className="btn btn-primary" onClick={handleSubmit}> Upload Videos </button>
         


        </>
    
    )

}

export default UploadForm;