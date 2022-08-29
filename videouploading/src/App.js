import './App.css';
import UploadForm from './components/UploadForm';
import UploadLists from './components/UploadLists';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URI } from './config/Constants';

const App=()=> {

  const[medias,setMedias]=useState([]);
  let allMedia=[];
  useEffect(()=>{
      getAllMedia();
  },[]);

  const getAllMedia=()=>{
    axios.get(`${BACKEND_URI}/api/v1/media/all`).then(result=>{
      setMedias(result.data);
     
      console.log(medias);
    }).catch(error=>{
      setMedias([]);
      console.log(error);
    })
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
              <div className='card' style={{height:'auto',width:'500px',margin:'20px',border:'1px solid red'}}>
                    <div className='card-body'>
                        <UploadForm getAllMedia={getAllMedia}/>
                    </div>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='card' style={{height:'auto',width:'500px',margin:'20px',border:'1px solid red'}}>
                    <div className='card-body'>
                          
                    </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
