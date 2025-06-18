import { useState } from 'react';
import DogPhoto from "./DogPhoto.jsx";
import Button from "./Button.jsx";

function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);

    const getDogPhoto = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Couldn\'t fetch an image, please check API call');
        }
        const data = await response.json();
        setDogPhotos(prev => [...prev, data.message]);
    }

    return (
        <div className="dog-gallery">
            <Button onClickHandler={ getDogPhoto }/>
            <div className="photos-wrapper">
                { dogPhotos.length === 0 ?
                    <h1>Get your first dog by clicking the button!</h1> :
                    dogPhotos.map(photo => <DogPhoto key={photo} dog={photo} />) }
            </div>
        </div>
    )
}

export default DogGallery;