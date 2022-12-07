import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./App.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material';

function App() {
    return (
        <div>
            <Card style={{ marginRight: "1vw", marginLeft: "1vw", marginTop: "2.5vh", marginBottom: "2.5vh", borderRadius: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ backgroundImage: "url(/images/polenaktion.jpg)", height: "80vh", width: "50vw", position: "relative" }}>
                        <img src="./images/kapelColor.png" style={{ position: "absolute", bottom: "0", right: 15, zIndex: 1, maxHeight: "60vh", filter: "drop-shadow(rgba(0, 0, 0, 0.35) 0px 3px 10px)" }} alt="martin kapel" />
                        <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ zIndex: 2, position: "absolute", bottom: 0, right: 15, textAlign: "end", fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                            <span className='authorText1'>MARTIN<br /></span>

                            KAPEL
                        </Typography>
                    </div>



                    <div style={{ backgroundImage: "url(/images/amfAuschwitz.jpg)", height: "80vh", width: "50vw", position: "relative" }}>
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
            </Card>


            <div className="timeline">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary" fontFamily="Merriweather">
                            <span style={{ marginTop: "1rem", display: "block" }}> October 2, 2009</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot >
                                <div style={{ fontFamily: "Merriweather", height: "2rem", width: "2rem", fontSize: "2rem", textAlign: "center", lineHeight: "2rem" }}>
                                    S
                                </div>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card style={{ width: "35rem", borderRadius: "1rem" }} className="merriweather">
                                <CardHeader title="Hank takes a shit" subheader="October 2, 2009" />

                                <div style={{ display: "flex" }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://i.ytimg.com/vi/D0TzeZ1SYV0/maxresdefault.jpg"
                                        alt="hank schrader realizing walt is heisenberg"
                                        style={{ marginRight: "1rem", borderTopRightRadius: "1rem" }}
                                    />
                                    <Typography variant="body2" color="text.secondary">
                                        Hank Schrader realizes that Walter White is Heisenberg after finding a copy of Walt Whitman's Leaves of Grass, which has a note from Gale in it. This is the beginning of the end for Walt.
                                    </Typography>
                                </div>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            10:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            12:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            9:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>

    );
}

export default App;