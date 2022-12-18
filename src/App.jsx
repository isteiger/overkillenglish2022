import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./App.css";
import Timeline from '@mui/lab/Timeline';
import { Card } from '@mui/material';
import TimelineElement from './TimelineElement';
import InfoElement from "./InfoElement";

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
                    <TimelineElement direction="right" inital="W" img="/images/elieYoung.jpg" imgalt="Young Elie Wiesel" title="Eliezer Wiesel was Born" date="September 30, 1928"
                        description="Eliezer &quot;Elie&quot; Wiesel was born to Shlomo and Sarah Wiesel on September 30th, 1928 in modern day Sighetu Marmației, Romania. He had two older sister at the time, Beatrice and Hilda. The picture to the left is the oldest one we could locate." />
                    <TimelineElement direction="left" inital="K" img="/images/Leipzig1930.jpg" imgalt="Leipzig, Germany in 1930" title="Martin Kapel was Born" date="Some time in 1930"
                        description="Martin Kapel was born in Leipzig, Germany in 1930. His parents were both Polish immigrants who moved to Germany. The picture to the right is of Leipzig in 1930, as little is known about Martin." />
                    <TimelineElement direction="right" inital="K" img="/images/polenaktion2.jpg" imgalt="Polandaktion" title="Kapel is deported to Poland" date="October 1938"
                        description="Martin Kapel was deported very forcefully by the SS to Poland in 1938. The picture to the right is of the Polandaktion, the mass deportation of Jews to Poland." />
                    <TimelineElement direction="left" inital="W" img="/images/auschwitzArrival.jpg" imgalt="Leipzig, Germany in 1930" title="Wiesel is sent to Auschwitz" date="May 1944"
                        description="Elie Wiesel was sent to Auschwitz in May of 1944. He was already living in a ghetto, but was moved, along with a ton of other local Jews, to Auschwitz. The picture to the right is of the Auschwitz concentration camp." />
                    <TimelineElement direction="right" inital="K" img="/images/kindertransport.jpg" imgalt="Kindertransport" title="Kapel escapes to England" date="July 18, 1940"
                        description="Martin Kapel was able to escape from Poland and get to Coventry, England on a special Kindertransport (children's transport). He lived in England until his death. The image to the left shows children from one of these transports arriving in England." />
                    <TimelineElement direction="left" inital="W" img="/images/Buchenwald.jpg" imgalt="Buchenwald" title="Wiesel is Liberated!" date="April 11, 1945"
                        description="Elie Wiesel was liberated from Buchenwald April, 11, 1945, as they were about to be moved to another camp. The picture to the right includes Elie. He is in the 2nd row from the bottom and 4 right from the left near the post." />
                    <TimelineElement direction="right" inital="W" img="/images/night.jpg" imgalt="Buchenwald" title={<>Wiesel releases <i>Un di velt hot geshvign</i></>} date="1956"
                        description={<>This is the first version of <i>Night</i>, and it is written in Yiddish. Since it's release, the memoir has been published in 30 different languages.</>} />
                    <TimelineElement direction="left" inital="W" img="/images/elieGrave.jpg" imgalt="Elie's Grave" title="Elie Wiesel dies" date="July 2, 2016"
                        description="Elie Wiesel died July 2nd, 2016 at his home in Manhattan. He is buried at Sharon Gardens Cemetary in Valhalla, New York. Senator from Utah Orrin Hatch paid tribute to Elie on the Senate floor. " />
                </Timeline>
            </div>

            <div className="card">
                <InfoElement title="Life Before"
                    kdescription="He was born in Leipzig, Germany, making him a Polish citizen by the laws of both Germany and Poland. He had to leave his primary school as anti-Jewish legislation meant that Jewish children no longer attend non-Jewish schools." kimg="/images/elieGrave.jpg" kimgalt="my nuts"
                    wdescription="" wimg="/images/elieGrave.jpg" wimgalt="my nuts"
                    similarities="asfdsssdf" />
            </div>
        </div>

    );
}

export default App;