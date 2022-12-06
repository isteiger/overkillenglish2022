import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./App.css";

function App() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "lightblue", height: "85vh", width: "50vw", position: "relative" }}>
                    <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ position: "absolute", bottom: 0, right: 15, textAlign: "end", fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                        <span className='authorText1'>MARTIN<br /></span>

                        KAPEL
                    </Typography>
                    <img src="./images/martin.png" alt="martin kapel" />
                </div>



                <div style={{ backgroundColor: "rgb(60, 119, 123)", height: "85vh", width: "50vw", position: "relative" }}>
                    <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ position: "absolute", bottom: 0, left: 15, fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                        <span className='authorText1'>ELIE<br /></span>
                        WIESEL
                    </Typography>
                </div>
            </div>
            <div style={{ height: "15vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h2" component="div" fontWeight="bold">
                    Holocaust Survivors
                </Typography>
            </div>
        </div>

    );
}

export default App;