import React from 'react';
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import TopHeader from '../component/TopHeader'
import Home from './Home'
import Questions from '../Data/Questions'
import Question from './SingleQuestion/index'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    Correct_Rate: {
        marginLeft: 20
    }
  }));

function App() {

    const classes = useStyles();
        return (
            <div>
                <TopHeader />
                <Router>
                    <div>
                        <div className={classes.root}>
                            <div className="circleBase type1">
                                <Link to="/" style={{ color:"white", textDecoration: "none"}}>
                                    全部
                                </Link>
                            </div>
                            {Questions.map(item => {
                                return (
                                    <div key={item.id} className="navContainer">
                                        <div className="circleBase type1">
                                            <Link to={`/${item.id}`} style={{ color:"white", textDecoration: "none"}}>{item.Name}</Link>
                                        </div>
                                        <span className={classes.Correct_Rate} className="CorrectRate">{Math.round((item.Correct/(item.Correct+item.Wrong))*100)}%</span>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route
                                path={`/:id`}>
                                    <Question />
                                </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
            
        )
}

export default App;