import React from 'react';
import BioData from './biodata.jsx';
import GeneralSummary from './generalsummary/generalsummary.jsx';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <section id="about" className="about-section section-padding">
		<div className="container">
			<h2 className="section-title wow fadeInUp animated animated animated animated animated" style={{visibility: 'visible', 'animation-name': 'fadeInUp'}} >About Me</h2>
			<div className="row">
                <BioData/>
                <GeneralSummary/>
			</div>
		</div>
	</section>;
  }

  componentDidMount() {
    
  }
}

export default About;
