import React from 'react'
import { FileDrop } from '@instructure/ui-forms'
import { Billboard } from '@instructure/ui-billboard'
import { Img } from '@instructure/ui-img'


const ImgUploader = () => {
    return (
        <FileDrop
            accept="image/*"
            onDropAccepted={([file]) => { console.log(`File accepted ${file.name}`) }}
            onDropRejected={([file]) => { console.log(`File rejected ${file.name}`) }}
            label={
                <Billboard
                heading="Upload your image"
                message="Drag and drop, or click to browse your computer"
                hero={<Img src={'https://i.imgur.com/IEeovdW.png'} />}
                />
            }
        />
    )
};

export default ImgUploader; 