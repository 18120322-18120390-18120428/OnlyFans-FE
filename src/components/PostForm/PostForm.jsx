import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import Input from '@mui/material/Input';
import ClearIcon from '@mui/icons-material/Clear';
import postApi from '../../services/postAxios';
export const PostForm = () => {
  const [content, setContent] = useState('');
  const [imageList, setImageList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [index, setIndex] = useState(1);
  const onSelectFile = (e, i) => {
    console.log(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      // setSelectedFile(undefined);
      return;
    }
    // setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    const readerImage = new FileReader();
    readerImage.readAsDataURL(e.target.files[0]);
    readerImage.onloadend = () => {
      if (imageList.length > i) {
        imageList[i].image = String(readerImage.result);
        imageList[i].preview = objectUrl;
        setImageList([...imageList]);
      } else {
        imageList.push({ order: i, image: String(readerImage.result), preview: objectUrl });
        setImageList([...imageList]);
        const temp = index + 1;
        setIndex(temp);
      }
    };
    return () => URL.revokeObjectURL(objectUrl);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      authorId: '121',
      content: content,
      images: imageList,
      fee: 0
    }
    const data = await postApi.createPost(formData);
    console.log(data);
  };
  return (
    <Box sx={{ maxWidth: '600px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'sticky',
          top: '0',
          height: '58px',
          zIndex: '1000',
          padding: '0 15px',
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span>
            <ArrowBackIcon sx={{ color: '#000' }} />
          </span>
          <Box
            sx={{
              display: 'flex',
              color: '#000',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '15px',
            }}
          >
            <Typography
              sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
            >
              NEW POST
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              border: '1px solid #ccc',
              borderRadius: '1000px',
              color: '#00aff0',
              marginRight: '8px',
            }}
            onClick={() => setContent('')}
          >
            CLEAR
          </Button>
          {content !== '' && content !== undefined ? (
            <Button
              sx={{
                border: '1px solid #00aff0',
                borderRadius: '1000px',
                color: '#fff',
                background: '#00aff0',
                fontWeight: 600,
              }}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              POST
            </Button>
          ) : (
            <button
              style={{
                border: '1px solid rgba(138,150,163,.75)',
                borderRadius: '1000px',
                color: '#fff',
                background: 'rgba(138,150,163,.75)',
                padding: '10px 13px',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              POST
            </button>
          )}
        </Box>
      </Box>
      <Box sx={{ padding: '0 19px', display: 'flex', flexWrap: 'wrap' }}>
        {imageList.map((item, index) => {
          return (
            <div key={index} style={{ margin: '5px', border: '1px solid #ccc' }}>
              <div style={{ position: 'relative', maxHeight: '100px' }}>
                <button style={{ position: 'absolute', top: 0, left: 0 }}>Edit</button>
                <button style={{ position: 'absolute', top: 0, right: 0 }}>
                  <ClearIcon />
                </button>
                {item.preview && (
                  <img
                    src={item.preview}
                    alt="anh"
                    style={{ height: '100px', width: '100px', objectFit: 'cover' }}
                  />
                )}
              </div>
              {/* <div style={{ position: 'absolute' }}>
                <label htmlFor="image">
                  <input
                    type="file"
                    onChange={(event) => onSelectFile(event, index)}
                    id="image_one"
                    name="image_one"
                    accept=".jpg,.png"
                    required={item.type == 'Ảnh bìa'}
                    style={{
                      opacity: 0,
                      position: 'absolute',
                      height: '100px',
                      width: '100px',
                    }}
                  />
                  <span>
                    <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                      {item.type}
                    </Button>
                  </span>
                </label>
              </div> */}
            </div>
          );
        })}
      </Box>
      <Box sx={{ minHeight: '100px', maxHeight: '250px' }}>
        <textarea
          style={{
            minHeight: '150px',
            width: '100%',
            padding: '15px',
            border: 'none',
            maxHeight: '250px',
            resize: 'none',
            outline: ' none',
            fontSize: '14px',
            boxSizing: 'border-box',
            '::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
          }}
          value={content}
          placeholder="Compose new post..."
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </Box>
      <Box sx={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        <Button sx={{ minWidth: '30px', position: 'relative' }}>
          <input
            type="file"
            onChange={(event) => onSelectFile(event, index)}
            id="image_one"
            name="image_one"
            accept=".jpg,.png"
            style={{
              opacity: 0,
              position: 'absolute',
              minHeight: '26px',
            }}
            // required={item.type == 'Ảnh bìa'}
          />
          <ImageOutlinedIcon sx={{ color: '#8a96a3', width: '24px', height: '24px' }} />
        </Button>
        <Button sx={{ minWidth: '30px' }}>
          <SortOutlinedIcon sx={{ color: '#8a96a3', width: '24px', height: '24px' }} />
        </Button>
        <Button sx={{ minWidth: '30px' }}>
          <QuizOutlinedIcon sx={{ color: '#8a96a3', width: '24px', height: '24px' }} />
        </Button>
      </Box>
    </Box>
  );
};
