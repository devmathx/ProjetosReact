import { useState, useEffect, FormEvent } from 'react';

import * as Photos from "./services/photos"; 
import { Photo } from "./types/Photo";
import PhotoItem from './components/PhotoItem';

import {
  Container,
  Area,
  Header,
  ScreenWarning,
  PhotoList,
  UploadForm
} from "./App.styles";

const App = () => {

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      let response = await Photos.getAll() 
      setPhotos(response);
      setLoading(false);
    }
    getPhotos();
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const removePhoto = (name: string): void => {
    const newList = photos.filter(item => item.name !== name);
    setPhotos(newList);
  }

  return(
    <Container>
      <Area>
        <Header>Galeria de Fotos</Header>

        <UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type='file' name='image'/>
          <input type='submit' value='Enviar'/>
          {uploading && "Enviando..."}
        </UploadForm>

        {loading && 
          <ScreenWarning>
            <div className='emoji'>✋</div>
            <div>Carregando...</div>
          </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} onRemove={removePhoto}/>
            ))}
          </PhotoList>
        }  

        {!loading && photos.length === 0 &&
          <ScreenWarning>
            <div className='emoji'>😢</div>
            <div>Não há fotos cadastradas.</div>
          </ScreenWarning>
        } 
      </Area>
    </Container>
  );
}

export default App;