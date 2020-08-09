import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import ImageView from './components/ImageView';

function App() {

  const [src, setSrc] = useState(null);

  
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSrc = {setSrc} />
      {src && <ImageView src = {src} setSrc = {setSrc}/>}
    </div>
  );
}

export default App;
