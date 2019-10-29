import React from 'react'
import { FileDrop } from '@instructure/ui-forms'
import { Billboard } from '@instructure/ui-billboard'
import { Img } from '@instructure/ui-img'
import database from '../firebase/firebase'

const ImgUploader = ({onImageUpload}) => {

    return ( 
        <FileDrop
            accept="image/*"
            onDropAccepted={([file]) => { 
                console.log(`File accepted ${file.name}`) 
            
                // create a storage ref
                let storageRef = database.ref(`images/${file.name}`);
                // upload file
                let task = storageRef.put(file);
                // update progress
                task.on('state_changed', 

                    function progress(snapshot) {
                        let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                        console.log(`Uploading: ${percentage}%`);
                    },

                    function error(err) {
                        console.log(`Upload ERROR: ${err}`)
                    },

                    function complete() {
                        console.log('Upload compeleted!')

                        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            // console.log('File available at', downloadURL);
                            onImageUpload(downloadURL);
                        });
                    }
                    
                );
            
            }}
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

/**

Access key ID: AKIA2DBXNBOBQ5LS7J7P
Secret access key: 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
User ARN: arn:aws:iam::693753416579:user/ycuser

 */