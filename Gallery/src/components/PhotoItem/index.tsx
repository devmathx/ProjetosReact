import { useState } from 'react';

import * as Photos from '../../services/photos';

import { Container } from "./styles";

type Props = {
    url: string,
    name: string,
    onRemove: (name: string) => void
}

const PhotoItem = ({ url, name, onRemove }: Props) => {
    
    const [nameButton, setNameButton] = useState("Remover");

    const handleClick = async () => {
        setNameButton("Removendo");
        await Photos.remove(name);
        onRemove(name)
    }
    
    return(
        <Container>
            <img src={url} alt={name}/>
            <div>{name}</div>
            <input type="button" value={nameButton} onClick={handleClick}/>
        </Container>
    );
}

export default PhotoItem;
