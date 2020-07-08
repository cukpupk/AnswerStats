import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grow: {
        flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
},
}));

export default function TopHeader() {
  const classes = useStyles();
  let [date, setDate] = useState(new Date());
  const arrayOfWeekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]

    let dateObj = new Date()
    let weekdayNumber = dateObj.getDay()
    let weekdayName = arrayOfWeekdays[weekdayNumber]
    useEffect(
        () => {
            var timer = setInterval(()=>setDate(new Date()), 1000)
            return function cleanup() {
                clearInterval(timer)
            }
        }
    )
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.text}>
        <Typography variant="h6" color="inherit">
            
          </Typography>
          <Typography variant="h6" color="inherit">
            答题报告
          </Typography>
          <Typography variant="h6" color="inherit">
            <p> {weekdayName}  {date.toLocaleDateString()} <span></span> {date.toLocaleTimeString()}</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}