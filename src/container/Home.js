import React from 'react';
import './Home.css'
import Questions from '../Data/Questions'
import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DisplayNames from './DisplayNames/DisplayNames'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

class Home extends React.Component {
    render () {
        return (
            <div className="Container">
                <div className="Left_Container">
                    {Questions.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <img src={item.image} alt="题目"></img>
                            </li>
                        )
                    })}
                </div>
                <div className="Right_Container">
                    <div className="QAStats">
                        <Chart id="chart"
                            title=""
                            dataSource={Questions}
                            onPointClick={this.onPointClick}
                            className="Chart"
                        >
                            <CommonSeriesSettings
                            argumentField="Name"
                            type="bar"
                            hoverMode="allArgumentPoints"
                            selectionMode="allArgumentPoints"
                            >
                            <Label visible={true}>
                                <Format type="fixedPoint" precision={0} />
                            </Label>
                            </CommonSeriesSettings>
                            <Series
                            valueField="Wrong"
                            name="错"
                            color="red"
                            />
                            <Series
                            valueField="Correct"
                            name="对"
                            color="green"
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
                            {Questions.map((item, index) => {
                                return (
                                    <Accordion key={item.id} style={{boxShadow: "none"}}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            <Typography><span className="QuestionName">{item.Name}</span><span className="CorrectAnswer">{item.correctAnswer}</span></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <DisplayNames Name={item.NamesAll} CorrectName={item.Correct_Names} WrongName={item.Wrong_Names}/>
                                            
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;