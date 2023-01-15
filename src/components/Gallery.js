import React from "react";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        thumbnailHeight : '100%'
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        thumbnailHeight : '100%'
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        thumbnailHeight : '100%'
    },
];
const GalleryTitle = styled.div`
    font-size: 18px;
    padding: 8rem 0 2rem 0;
    text-align : center; 
    justify-content: center;
    font-weight: bold;

`;
function Gallery(){
    return(
        <div>
            <GalleryTitle>GALLERY</GalleryTitle>
            <ImageGallery items={images} showPlayButton={false}/>
        </div>);
};

export default Gallery;