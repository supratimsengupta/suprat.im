import React from 'react';
import TimeLineItem from './timelineitem.jsx';

class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = { timeLineItems: props.lineItems || [] }; // TODO: Set this array from outside by passing a parameter of timelineItems.
  }

  render() {
    return <div className = "row" >  
                <div className = "col-md-12" >  
                    <div className = "resume-title" >  
                        <h3 >  {this.state.title} </h3 >  
                    </div >  
                    <div className = "resume" >  
                        <ul className = "timeline" >
                            {this.state.timeLineItems.map(function(timelineItem, index){
                                return <TimeLineItem key={index} item={timelineItem} inverted = { index % 2 === 0 ? "timeline-inverted" : "" }/> 
                            })}
                        </ul >  
                    </div >  
                </div >  
            </div > ;
  }

  componentDidMount() {
    
  }
}

export default Timeline;
