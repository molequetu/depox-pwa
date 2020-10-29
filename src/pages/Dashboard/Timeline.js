import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function StockTimeline(props) {
  const classes = useStyles();

  function parseDate(date) {
      return new Date(date).toLocaleTimeString();
  }

  return (
    <Timeline align="alternate">
      {props.stocks &&
        props.stocks.map((stock) => (
          <TimelineItem key={stock.id}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {parseDate(stock.createdAt)}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                 {stock.actionType === 0 ? <TimelineDot color="primary"> <ArrowDownwardIcon/> </TimelineDot>
                  :<TimelineDot color="secondary"><ArrowUpwardIcon/></TimelineDot>
                  }
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                {stock.item.code} &rarr; {stock.bin.code} : {stock.quantity}
                </Typography>

              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
}
