import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./App.css";

function App() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundImage: "url(/images/polenaktion.jpg)", height: "85vh", width: "50vw", position: "relative" }}>
                    <img src="./images/kapelColor.png" style={{ position: "absolute", bottom: "0", right: 15, zIndex: 1, maxHeight: "60vh", filter: "drop-shadow(rgba(0, 0, 0, 0.35) 0px 3px 10px)" }} alt="martin kapel" />
                    <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ zIndex: 2, position: "absolute", bottom: 0, right: 15, textAlign: "end", fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                        <span className='authorText1'>MARTIN<br /></span>

                        KAPEL
                    </Typography>
                </div>



                <div style={{ backgroundImage: "url(/images/amfAuschwitz.jpg)", height: "85vh", width: "50vw", position: "relative" }}>
                    <img src="./images/elieColor.png" style={{ position: "absolute", bottom: "0", left: 15, zIndex: 1, maxHeight: "60vh", filter: "drop-shadow(rgba(0, 0, 0, 0.35) 0px 3px 10px)" }} alt="elie wiesel" />

                    <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ zIndex: 2, position: "absolute", bottom: 0, left: 15, fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                        <span className='authorText1'>ELIE<br /></span>
                        WIESEL
                    </Typography>
                </div>
            </div>
            <div style={{ height: "15vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", backgroundColor: "#4b4b4b", zIndex: 3 }}>
                <div>
                    <Typography variant="h2" component="div" fontWeight="bold" fontFamily="Merriweather" letterSpacing=".3rem" color="rgba(255,255,255,0.8)">
                        Holocaust Survivors
                    </Typography>
                    <Typography variant="h6" fontFamily="Merriweather" fontWeight="bold" textAlign="center" color="rgba(255,255,255,0.8)">By: Ian Steiger, Daniel Izquierdo, and Yosir Aberchane</Typography>

                </div>

            </div>
        </div>

    );
}

export default App;