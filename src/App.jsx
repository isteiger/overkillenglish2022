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
                        <TimelineSeparator>
                            <TimelineDot >
                                <div style={{ fontFamily: "Merriweather", height: "2rem", width: "2rem", fontSize: "1.5rem", textAlign: "center", lineHeight: "2rem" }}>
                                    W
                                </div>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card style={{ width: "35rem", borderRadius: "1rem" }} className="merriweather">
                                <CardHeader title="Eliezer Wiesel was Born" subheader="September 30, 1928" />

                                <div style={{ display: "flex" }}>
                                    <CardMedia
                                        component="img"
                                        image="/images/elieYoung.jpg"
                                        alt="hank schrader realizing walt is heisenberg"
                                        style={{ marginRight: "1rem", borderTopRightRadius: "1rem", maxHeight: "15rem", width: "auto" }}
                                    />
                                    <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem" }}>
                                        Eliezer "Elie" Wiesel was born to Shlomo and Sarah Wiesel on September 30th, 1928 in modern day Sighetu Marmației, Romania. He had two older sister at the time, Beatrice and Hilda. The picture to the left is the oldest one we could locate.
                                    </Typography>
                                </div>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot>
                                <div style={{ fontFamily: "Merriweather", height: "2rem", width: "2rem", fontSize: "1.5rem", textAlign: "center", lineHeight: "2rem" }}>
                                    K
                                </div>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card style={{ width: "35rem", borderRadius: "1rem", marginLeft: "auto", marginRight: "0" }} className="merriweather">
                                <CardHeader title="Martin Kapel was Born" subheader="Some time in 1930" />

                                <div style={{ display: "flex" }}>
                                    <Typography variant="body2" color="text.secondary" style={{ marginLeft: "1rem" }}>
                                        Martin Kapel was born in Leipzig, Germany in 1930. His parents were both Polish immigrants who moved to Germany. The picture to the right is of Leipzig in 1930, as little is known about Martin.
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        image="/images/Leipzig1930.jpg"
                                        alt="Leipzig, Germany in 1930"
                                        style={{ marginLeft: "1rem", borderTopLeftRadius: "1rem", maxHeight: "15rem", maxWidth: "20rem" }}
                                    />
                                </div>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>


                            <Card style={{ width: "35rem", borderRadius: "1rem" }} className="merriweather">
                                <CardHeader title="Kapel is deported to Poland" subheader="1938" />

                                <div style={{ display: "flex" }}>
                                    <CardMedia
                                        component="img"
                                        image="/images/polenaktion2.jpg"
                                        alt="Polandaktion"
                                        style={{ marginRight: "1rem", borderTopRightRadius: "1rem", maxHeight: "15rem", width: "auto" }}
                                    />
                                    <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem" }}>
                                        Martin Kapel was deported very forcefully by the SS to Poland in 1938. The picture to the right is of the Polandaktion, the mass deportation of Jews to Poland.
                                    </Typography>
                                </div>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card style={{ width: "35rem", borderRadius: "1rem", marginLeft: "auto", marginRight: "0" }} className="merriweather">
                                <CardHeader title="Wiesel is sent to Auschwitz" subheader="May 1944" />

                                <div style={{ display: "flex" }}>
                                    <Typography variant="body2" color="text.secondary" style={{ marginLeft: "1rem" }}>
                                        Elie Wiesel was sent to Auschwitz in May of 1944. He was already living in a ghetto, but was moved, along with a ton of other local Jews, to Auschwitz. The picture to the right is of the Auschwitz concentration camp.
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        image="/images/Leipzig1930.jpg"
                                        alt="Leipzig, Germany in 1930"
                                        style={{ marginLeft: "1rem", borderTopLeftRadius: "1rem", maxHeight: "15rem", maxWidth: "20rem" }}
                                    />
                                </div>
                            </Card></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>

    );
}

export default App;