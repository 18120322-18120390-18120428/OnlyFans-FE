import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import Input from '@mui/material/Input';

export const CreatePost = () => {
  // const onSelectFile = (e: any, i: number) => {
  //   console.log(e.target.files[0]);
  //   if (!e.target.files || e.target.files.length === 0) {
  //     // setSelectedFile(undefined);
  //     return;
  //   }
  //   // setSelectedFile(e.target.files[0]);
  //   const objectUrl = URL.createObjectURL(e.target.files[0]);
  //   const readerImage = new FileReader();
  //   readerImage.readAsDataURL(e.target.files[0]);
  //   readerImage.onloadend = () => {
  //     if (state.image.length > i) {
  //       state.image[i].image = String(readerImage.result);
  //       state.image[i].preview = objectUrl;
  //       dispatchDataForm({ type: 'UPDATE_IMAGE', payload: state.image });
  //     } else {
  //       dispatchDataForm({
  //         type: 'ADD_IMAGE',
  //         payload: { order: i, image: String(readerImage.result), preview: objectUrl },
  //       });
  //     }
  //   };
  //   return () => URL.revokeObjectURL(objectUrl);
  // };
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
          >
            CLEAR
          </Button>
          <Button
            sx={{
              border: '1px solid #00aff0',
              borderRadius: '1000px',
              color: '#fff',
              background: '#00aff0',
            }}
          >
            POST
          </Button>
        </Box>
      </Box>
      <Box>
        {/* <div className="add-new-product__input" key={index}>
                      <div className="add-new-product__input__image add-new-product__input__image--100">
                        {item.preview && <img src={item.preview} />}
                      </div>
                      <div className="add-new-product__input__upload">
                        <label className="add-new-product__input__upload__label" htmlFor="image">
                          <input
                            type="file"
                            onChange={(event: any) => onSelectFile(event, index)}
                            id="image_one"
                            name="image_one"
                            accept=".jpg,.png"
                            required={item.type == 'Ảnh bìa'}
                          />
                          <span>
                            <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                              {item.type}
                            </Button>
                          </span>
                        </label>
                      </div>
                    </div> */}
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
        ></textarea>
      </Box>
      <Box sx={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        <Button sx={{ minWidth: '30px' }}>
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
