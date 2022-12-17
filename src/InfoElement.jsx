import { Card, CardHeader, CardMedia, Typography } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function InfoElement(props) {

    return (
        <Card className="merriweather">
            <CardHeader title={props.title} />

        </Card>
    );
}