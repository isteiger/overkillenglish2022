import { Card, CardHeader, CardMedia, Divider, Typography } from "@mui/material";

export default function InfoElement(props) {

    return (
        <Card className="merriweather" style={{ borderRadius: "1rem" }}>
            <CardHeader title={props.title} style={{ textAlign: "center" }} />
            <Divider />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "40%" }} >
                    {props.ksubheader ? <CardHeader title="Martin Kapel" subheader={props.ksubheader} style={{ textAlign: "right" }} /> : <CardHeader title="Martin Kapel" style={{ textAlign: "right" }} />}

                    <div style={{ display: "flex", height: "inherit" }}>
                        <Typography variant="body2" color="text.secondary" style={{ marginLeft: "1rem", flexGrow: "1", textAlign: "right" }}>
                            {props.kdescription}
                        </Typography>
                        <div style={{ marginLeft: "1rem", borderTopLeftRadius: "1rem", flexBasis: "20vw", flexGrow: 0, flexShrink: 0, backgroundImage: `url('${props.kimg}')`, backgroundSize: "cover" }}>

                        </div>
                        {/*
                        <CardMedia
                            component="img"
                            image={props.kimg}
                            alt={props.kimgalt}
                            style={{ marginLeft: "1rem", borderTopLeftRadius: "1rem", maxHeight: "15rem", width: "auto" }}
                        />*/}
                    </div>
                </div>


                <div style={{ width: "20%", borderRight: "thin solid rgba(0, 0, 0, 0.12)", borderLeft: "thin solid rgba(0, 0, 0, 0.12)" }}>
                    <CardHeader title="Similarities" style={{ textAlign: "center" }} />
                    <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem", textAlign: "center" }}>
                        {props.similarities}
                    </Typography>
                </div>


                <div style={{ width: "40%" }}>
                    {props.wsubheader ? <CardHeader title="Elie Wiesel" subheader={props.wsubheader} /> : <CardHeader title="Elie Wiesel" />}
                    <div style={{ display: "flex", height: "inherit" }}>
                        <div style={{ marginRight: "1rem", borderTopRightRadius: "1rem", flexBasis: "20vw", flexGrow: 0, flexShrink: 0, backgroundImage: `url('${props.wimg}')`, backgroundSize: "cover" }}>

                        </div>

                        <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem" }}>
                            {props.wdescription}
                        </Typography>
                    </div>
                </div>
            </div>
        </Card>
    );
}