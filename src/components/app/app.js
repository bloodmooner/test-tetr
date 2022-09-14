

import AppStreamCam from '../app-stream-cam/app-stream-cam';
import AppStreamVolume from '../app-stream-volume/app-stream-volume';

import './app.css';



function App () {

    return (
        <div className="App">
            
            <div className="app-container cover-container">
                <AppStreamCam />
                <AppStreamVolume />
            </div>
            

        </div>
    );

}

export default App;