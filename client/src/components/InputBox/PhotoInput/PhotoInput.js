import React , { useState } from 'react';

import { Carousel, Upload} from "antd";

const PhotoInput = ({photo}) => {
    require("./PhotoInput.css");
    const [fileList, setFileList] = useState([
      ]);
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };
      return (
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            // onPreview={onPreview}
            class='pict'
          >
            {fileList.length < 3 && '+ Upload'}
          </Upload>
      );
    }
export default PhotoInput;

