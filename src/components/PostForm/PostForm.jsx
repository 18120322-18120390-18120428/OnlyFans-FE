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
import CreateIcon from '@mui/icons-material/Create';
import postApi from '../../services/postAxios';
export const PostForm = ({
  content,
  setContent,
  imageList,
  index,
  setIndex,
  onSelectFile,
  handleClearImageWithIndex,
  handleClearAllImage,
  handleSubmit,
}) => {
  return (
    <Box sx={{ maxWidth: '600px' }}>
      
      <Box sx={{ padding: '0 19px', display: 'flex', flexWrap: 'wrap' }}>
        {imageList && imageList.map((item, i) => {
          return (
            <div key={i} style={{ margin: '5px', border: '1px solid #ccc' }}>
              <div style={{ position: 'relative', maxHeight: '100px' }}>
                <Button
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    minWidth: '15px',
                    textTransform: 'capitalize',
                    color: '#000',
                    lineHeight: '1.1',
                    marginLeft: '3px',
                    marginTop: '4px',
                    padding: '6px 4px',
                    fontSize: '13px',
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#ccc',
                      opacity: 0.7,
                    },
                  }}
                >
                  <input
                    type="file"
                    onChange={(event) => onSelectFile(event, i)}
                    id="image"
                    name="image"
                    accept=".jpg,.png"
                    style={{
                      opacity: 0,
                      position: 'absolute',
                      minHeight: '20px',
                      maxWidth: '40px',
                    }}
                    // required={item.type == 'Ảnh bìa'}
                  />
                  <CreateIcon
                    sx={{ color: '#000', width: '14px', height: '14px', marginRight: '3px' }}
                  />
                  Edit
                </Button>
                <Button
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    minWidth: '10px',
                    borderRadius: '1000px',
                    marginTop: '4px',
                    marginRight: '3px',
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#ccc',
                      opacity: 0.7,
                    },
                  }}
                  onClick={() => handleClearImageWithIndex(i + 1)}
                >
                  <ClearIcon sx={{ color: '#000', width: '15px', height: '15px' }} />
                </Button>
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
          <ImageOutlinedIcon
            sx={{ color: '#8a96a3', width: '24px', height: '24px', margin: '0 2px' }}
          />
        </Button>
        <Button sx={{ minWidth: '30px' }}>
          <SortOutlinedIcon
            sx={{ color: '#8a96a3', width: '24px', height: '24px', margin: '0 2px' }}
          />
        </Button>
        <Button sx={{ minWidth: '30px' }}>
          <QuizOutlinedIcon
            sx={{ color: '#8a96a3', width: '24px', height: '24px', margin: '0 2px' }}
          />
        </Button>
      </Box>
    </Box>
  );
};
