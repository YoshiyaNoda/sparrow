import React from 'react';
import ImageUtil from '../../api/ImageUtil';

type ImageProps = {
    url: string;
}

const Image = ({ url }: ImageProps) => {
    return <img src={ImageUtil.getImageUrlPrefix() + url} width={'100%'}></img>
}

export default Image;
