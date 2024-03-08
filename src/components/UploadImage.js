import React from 'react'
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { uploadImage } from '../redux/actions/productAction';
import { uploadThumbImage } from '../redux/actions/productAction';

function UploadImage() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [thumbfile, setThumbfile] = useState();


  const handleThumbFile = (e) => {
    setThumbfile(e.target.files[0]);
  };
  // uploading thumbnail image file 
  const handleThumbUpload = async () => {
    try {
      await dispatch(uploadThumbImage(thumbfile, title));
    } catch (error) {}
  };


  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  // uploading image file 
  const handleUpload = async () => {
    try {
      await dispatch(uploadImage(file, title));
    } catch (error) {}
  };

  return (
    
    <div>
       <input
                type="text"
                value={title}
                placeholder="Name"
                className="border p-3 rounded-lg"
                id="name"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />

      <div className="flex gap-4">
                <input
                  onChange={handleFile}
                  className="p-3 border border-gray-300 rounded w-full"
                  type="file"
                  id="images"
                />

                <button onClick={handleUpload}>Upload</button>
              </div>
      <div className="flex gap-4">
                <input
                  onChange={handleThumbFile}
                  className="p-3 border border-gray-300 rounded w-full"
                  type="file"
                  id="images"
                />

                <button onClick={handleThumbUpload}>Upload thumbnail</button>
      </div>
    </div>
  )
}

export default UploadImage

