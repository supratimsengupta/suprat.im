import React from 'react';

class TimelineItem extends React.Component {
  constructor(props) {
    super();
    this.state = props.item;
    this.state.timelineitemstate = props.inverted;
  }

  render() {
    return <li className={this.state.timelineitemstate}>
								<div className="posted-date">
									<span className="month">{this.state.dateRange}</span>
								</div>

								<div className="timeline-panel wow fadeInUp animated animated animated animated animated" style={{'visibility': 'visible', 'animation-name': 'fadeInUp'}}>
									<div className="timeline-content">
										<div className="timeline-heading">
											<h3>{this.state.title}</h3>
											<span>{this.state.location}</span>
										</div>

										<div className="timeline-body">
											<p>{this.state.description}</p>
										</div>
									</div>
								</div>
							</li>;
  }

  componentDidMount() {
    
  }
}

export default TimelineItem;
