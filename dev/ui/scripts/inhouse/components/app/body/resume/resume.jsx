import React from 'react';
import EducationTimeLine from './educationtimeline.jsx';
import WorkTimeLine from './worktimeline.jsx';

class Resume extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <section id="resume" className="resume-section section-padding">
		<div className="container">
			<h2 className="section-title wow fadeInUp animated animated animated animated animated" style={{'visibility': 'visible', 'animation-name': 'fadeInUp'}}>Resume</h2>
            <EducationTimeLine />
            <WorkTimeLine />
		</div>
	</section>;
  }

  componentDidMount() {
    
  }
}

export default Resume;
