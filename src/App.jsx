import "./App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Timeline from "@mui/lab/Timeline";
import { Card, CardHeader, Collapse, Divider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

import InfoElement from "./InfoElement";
import TimelineElement from "./TimelineElement";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));


function App() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <Card style={{ marginRight: "1vw", marginLeft: "1vw", marginTop: "2.5vh", marginBottom: "2.5vh", borderRadius: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ backgroundImage: "url(/images/polenaktion.jpg)", height: "80vh", width: "50vw", position: "relative" }}>
                        <img src="./images/kapelColor.png" style={{ position: "absolute", bottom: "0", right: 15, zIndex: 1, maxHeight: "60vh", filter: "drop-shadow(rgba(0, 0, 0, 0.35) 0px 3px 10px)" }} alt="martin kapel" />
                        <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ zIndex: 2, position: "absolute", bottom: 0, right: 15, textAlign: "end", fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                            <span className="authorText1">MARTIN<br /></span>

                            KAPEL
                        </Typography>
                    </div>



                    <div style={{ backgroundImage: "url(/images/amfAuschwitz.jpg)", height: "80vh", width: "50vw", position: "relative" }}>
                        <img src="./images/elieColor.png" style={{ position: "absolute", bottom: "0", left: 15, zIndex: 1, maxHeight: "60vh", filter: "drop-shadow(rgba(0, 0, 0, 0.35) 0px 3px 10px)" }} alt="elie wiesel" />

                        <Typography variant="h1" fontWeight="bold" color="rgba(255,255,255,0.8)" style={{ zIndex: 2, position: "absolute", bottom: 0, left: 15, fontFamily: "Merriweather, serif", fontSize: "8rem" }}>
                            <span className="authorText1">ELIE<br /></span>
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
                    kdescription="He was born in Leipzig, Germany, making him a Polish citizen by the laws of both Germany and Poland.
                    According to shalomadventure.com, he &quot;was brought up in an orthodox Jewish household&quot; and they weren't well off. " kimg="/images/elieGrave.jpg" kimgalt="my nuts"
                    wdescription="He was born in Sighet, Romania on September 30th, 1928. His family consisted of his mother, Sarah, his father, Shlomo, and his 3 sisters, Beatrice, Hilda, and Tzipora. His father was a straightforward businessman who encouraged Elie to pursue education, and his mother encouraged him to study the Torah." wimg="/images/elieGrave.jpg" wimgalt="my nuts"
                    similarities="asfdsssdf" />
            </div>

            <div className="card">
                <InfoElement title="Relocation"
                    ksubheader="Polenaktion, October 1938"
                    kdescription="One morning in 1938, his family got a knock on the door in the early morning. It was the Nazis. They were told to quickly get dressed, get their stuff, and go. They were put on a train, with lots more passengers getting on along the way, and then they were dropped off, told to walk along the railroad line, and then they made it to Poland, with the responding officers confused, since Germany did this in secret. They ended up staying with some relatives in Kraków." kimg="/images/elieGrave.jpg" kimgalt="my nuts"
                    wdescription="" wimg="/images/elieGrave.jpg" wimgalt="my nuts"
                    similarities="asfdsssdf" />
            </div>
            <div className="card">
                <InfoElement title="Place of Survival"

                    ksubheader="Poland" kdescription="One morning in 1938, his family got a knock on the door in the early morning. It was the Nazis. They were told to quickly get dressed, get their stuff, and go. They were put on a train, with lots more passengers getting on along the way, and then they were dropped off, told to walk along the railroad line, and then they made it to Poland, with the responding officers confused, since Germany did this in secret. They ended up staying with some relatives in Kraków." kimg="/images/elieGrave.jpg" kimgalt="my nuts"
                    wdescription="" wimg="/images/elieGrave.jpg" wimgalt="my nuts"
                    similarities="asfdsssdf" />
            </div>
            <div className="card">
                <InfoElement title="Experiences"
                    kdescription="One morning in 1938, his family got a knock on the door in the early morning. It was the Nazis. They were told to quickly get dressed, get their stuff, and go. They were put on a train, with lots more passengers getting on along the way, and then they were dropped off, told to walk along the railroad line, and then they made it to Poland, with the responding officers confused, since Germany did this in secret. They ended up staying with some relatives in Kraków." kimg="/images/elieGrave.jpg" kimgalt="my nuts"
                    wdescription="" wimg="/images/elieGrave.jpg" wimgalt="my nuts"
                    similarities="asfdsssdf" />
            </div>
            <div className="card">
                <InfoElement title="Life After"
                    kdescription="Martin went to the local school in Coventry and lived with his foster family in England. He learned English quickly, which led him to be put in the normal classes quite fast. Air raids occurred a lot in Coventry, with the worst being in November 1940. He moved to Birmingham for University, where he got a PhD in Chemistry, and he has lived there since. No information is available on whether he has died. The latest date I can find relating to him is 2017." kimg="/images/elieGrave.jpg" kimgalt="my nuts"
                    wdescription="" wimg="/images/elieGrave.jpg" wimgalt="my nuts"
                    similarities="asfdsssdf" />
            </div>
            <Card>
                <CardHeader title="Works Cited" action={<ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more" f
                >
                    <ExpandMoreIcon />
                </ExpandMore>} />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "50%" }}>
                            <CardHeader title="Martin Kapel" style={{ textAlign: "right" }} />
                            <div style={{ display: "flex" }}>
                                <Typography variant="body2" color="text.secondary" style={{ marginLeft: "1rem", flexGrow: "1", textAlign: "right" }}>
                                    jckljfklj
                                </Typography>
                            </div>
                        </div>
                        <div style={{ width: "50%", borderLeft: "thin solid rgba(0, 0, 0, 0.12)" }}>
                            <CardHeader title="Elie Wiesel" />
                            <div style={{ display: "flex" }}>
                                <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem" }}>
                                    sfsd
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </Card>
        </div>
    );
}

export default App;