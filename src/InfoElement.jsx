import { Card, CardHeader, CardMedia, Typography, Divider } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function InfoElement(props) {

    return (
        <Card className="merriweather" style={{ borderRadius: "1rem" }}>
            <CardHeader title={props.title} style={{ textAlign: "center" }} />
            <Divider />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "40%" }} >
                    <CardHeader title="Martin Kapel" style={{ textAlign: "right" }} />

                    <div style={{ display: "flex" }}>
                        <Typography variant="body2" color="text.secondary" style={{ marginLeft: "1rem", flexGrow: "1", textAlign: "right" }}>
                            {props.kdescription}
                        </Typography>
                        <CardMedia
                            component="img"
                            image={props.kimg}
                            alt={props.kimgalt}
                            style={{ marginLeft: "1rem", borderTopLeftRadius: "1rem", maxHeight: "15rem", width: "auto" }}
                        />
                    </div>
                </div>


                <div style={{ width: "20%", borderRight: "thin solid rgba(0, 0, 0, 0.12)", borderLeft: "thin solid rgba(0, 0, 0, 0.12)" }}>
                    <CardHeader title="Similarities" style={{ textAlign: "center" }} />
                    <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem", textAlign: "center" }}>
                        {props.similarities}
                    </Typography>
                </div>


                <div style={{ width: "40%" }}>
                    <CardHeader title="Elie Wiesel" />
                    <div style={{ display: "flex" }}>
                        <CardMedia
                            component="img"
                            image={props.wimg}
                            alt={props.wimgalt}
                            style={{ marginRight: "1rem", borderTopRightRadius: "1rem", maxHeight: "15rem", width: "auto" }}
                        />
                        <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem" }}>
                            {props.wdescription}
                        </Typography>
                    </div>
                </div>
            </div>
        </Card>
    );
}