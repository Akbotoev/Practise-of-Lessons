import { useState } from "react";

export const TaskLid = () => {

    const [ photos, setPhotos ] = useState([]);
    const [ currentPhoto, setCurrentPhoto ] = useState('');

    const handleButtonChange = () => {
        const url = `https://picsum.photos/600/400?random=${Date.now()}`;
        setCurrentPhoto(url);
        setPhotos(prevPhoto => [...prevPhoto, photos])
    }
    return(
        <>
       <div>
        <button className="btn" onClick={handleButtonChange}> Click Me</button>
        {currentPhoto && <img src={currentPhoto} alt={`random photo`}/>}
        <ul>
            {photos.map((photo, index) => {
                <li key={index}>
                    <img src={photo}
                     alt={`Random Photo${index + 1}`}/>
                </li>
            })}
        </ul>
       </div>
        </>
    )
}
export default TaskLid;