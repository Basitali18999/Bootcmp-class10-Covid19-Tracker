import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TheGrid() {
  
  useEffect(() => {
    
    async function fetchData(){

      const response = await fetch("https://covid19.mathdro.id/api")
      let data = await response.json(); 
      console.log(data)
    }
    fetchData();
    
  }, [])
  
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.paper} elevation={3} >Grid 1</Paper>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.paper} elevation={3}>Grid 2</Paper>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.paper} elevation={3}>Grid 3</Paper>
        </Grid>
    
      </Grid>
    </div>
  );
}

export default TheGrid;
