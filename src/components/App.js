// create your App component here


import React, {useEffect, useState} from "react";

function App () {

    const [dogImage, setDogImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(obj => {
            setDogImage(obj.message);
            setIsLoaded(true);
        });
    }, []);

    
    if (!isLoaded) return <p>Loading...</p>;
    
    return (
        <img 
            src={dogImage}
            alt="A Random Dog"
        />
    );

}

export default App;