import { useState, useEffect } from "react";
import { getImg } from "../helpers/getImg";
export const useFetchImg = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

     const getImages = async() => {
        const newImages = await getImg( category );
        setImages(newImages);
        setIsLoading(false);
     }

    useEffect(() =>{
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}