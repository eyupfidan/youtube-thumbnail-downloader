import React, { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar'
import saveAs from 'file-saver';

const ThumbnailDownloader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const youtubeUrlRef = useRef(null);
  const linkRef = useRef(null);

  const getThumbnail = async () => {
    try {
      const url = youtubeUrlRef.current.value;
      const id = url.match(
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|shorts\/|embed\/|v\/)?)([\w\-]+)(\S+)?$/
      )[6];
      const imgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
      setThumbnailUrl(imgUrl);
    } catch (error) {
      toast('Invalid Youtube URL');
    }
  };

  useEffect(() => {
    if (thumbnailUrl) {
      linkRef.current.href = thumbnailUrl;
    }
  }, [thumbnailUrl]);

  const downloadThumbnail = () => {
    let url = linkRef.current.href
    saveAs(url, "get-yt-thumb.jpg");
  };

  return (
    <>
    <Navbar/>
    <div className="container my-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Youtube URL"
          ref={youtubeUrlRef}
        />
        <button className="btn btn-primary get-thumbnail" type="button" onClick={getThumbnail}>
          Get Thumbnail
        </button>
      </div>
      {thumbnailUrl && (
        <div>
          <img src={thumbnailUrl} alt="Youtube Thumbnail" className="img-fluid" />
          <button className="btn btn-success mt-2" onClick={downloadThumbnail}>
            Download Thumbnail
          </button>
          
          <a
            href="#"
            ref={linkRef}
            style={{ display: 'none' }}
            download="get-yt-thumb.jpg"
          />
        </div>
      )}
    </div>
    <Toaster
  position="bottom-right"
  reverseOrder={false}
/>    
</>
  );
};

export default ThumbnailDownloader;
