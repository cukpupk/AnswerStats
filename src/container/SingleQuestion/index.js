import React from 'react';
import '../Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import DisplaySingleName from '../DisplayNames/DisplaySingleName'
import Questions from '../../Data/Questions'
import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import MutipleChoice from '../../Data/MutipleChoose'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DisplayNames from '../DisplayNames/DisplayNames'
function Question() {

    let { id } = useParams();
    console.log(id)
    return (
        <div className="Container">
        <div className="Left_Container">
            <img src={Questions[id-1].image}></img>
        </div>
        <div className="Right_Container">
            <div className="QAStats">
                <Chart id="chart"
                    title=""
                    dataSource={Questions, MutipleChoice}
                    className="Chart"
                >
                    <CommonSeriesSettings
                    argumentField="Choice"
                    type="bar"
                    hoverMode="allArgumentPoints"
                    
                    barPadding={0.5}
                    >
                    <Label visible={true}>
                        <Format type="fixedPoint" precision={0} />
                    </Label>
                    </CommonSeriesSettings>
                    <Series
                    valueField="Number_"
                    name="选项"
                    color="red"
                    />
                    <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                    <Export enabled={true} />
                </Chart>
            </div>
            <div className="details">
                <div className="AnswerDetails">
                    答题详情
                </div>
                <div className="DetailedAnswer">
                    {MutipleChoice.map((item, index) => {
                        return (
                            <Accordion key={item.id} style={{boxShadow: "none"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography>
                                        <span className="QuestionName">答案</span>
                                        <span className="CorrectAnswer"  style={{ color: (item.Choice === Questions[id-1].correctAnswer) ? "green" : "red" }}>{item.Choice}</span>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <DisplaySingleName Name={item.Name_} />
                                    
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    );
  }

  export default Question;