import { Card, CardHeader, CardMedia, Typography } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimelineElement(props) {
    let right = (
        <>
            <CardMedia
                component="img"
                image={props.img}
                alt={props.imgalt}
                style={{ marginRight: "1rem", borderTopRightRadius: "1rem", maxHeight: "15rem", width: "auto" }}
            />
            <Typography variant="body2" color="text.secondary" style={{ marginRight: "1rem" }}>
                {props.description}
            </Typography>
        </>
    );
    let left = (
        <>
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: "1rem" }}>
                {props.description}
            </Typography>
            <CardMedia
                component="img"
                image={props.img}
                alt={props.imgalt}
                style={{ marginLeft: "1rem", borderTopLeftRadius: "1rem", maxHeight: "15rem", maxWidth: "20rem" }}
            />
        </>
    );
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot >
                    <div style={{ fontFamily: "Merriweather", height: "2rem", width: "2rem", fontSize: "1.5rem", textAlign: "center", lineHeight: "2rem" }}>
                        {props.inital}
                    </div>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Card style={props.direction === "left" ? { width: "35rem", borderRadius: "1rem", marginLeft: "auto", marginRight: "0" } : { width: "35rem", borderRadius: "1rem" }} className="merriweather">
                    <CardHeader title={props.title} subheader={props.date} />

                    <div style={{ display: "flex" }}>
                        {props.direction === "left" ? left : right}
                    </div>
                </Card>
            </TimelineContent>
        </TimelineItem>
    )
}