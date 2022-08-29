import React from "react"
import { BACKEND_URI } from "../config/Constants"


const UploadLists=({medias})=>{

    return(<>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Video URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        medias && medias.map(media=>{
                                return (
                                    <tr>
                                        <td>{media.name}</td>
                                        <td>
                                            {media.videos.map(video=>{
                                                return (
                                                    <video>
                                                        <source src={`${BACKEND_URI}/${video}`}/>
                                                        your browser doesn't support the video 
                                                    </video>
                                                )
                                            })}
                                        </td>
                                    </tr>
                                )

                        })

                        }
                    </tbody>
                </table>
            </div>
        </div>


        </>
    
    )

}

export default UploadLists;