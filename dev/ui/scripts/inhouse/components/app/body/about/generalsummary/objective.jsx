import React from 'react';

class Objective extends React.Component {
  constructor() {
    super();
    this.state = { objectiveText: "An opportunity to work and upgrade oneself, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community. I'm presently expanding my solid experience in UI / UX design. I focus on using my interpersonal skills to build good user experience and create a strong interest in my employers. I hope to develop skills in motion design and my knowledge of the Web, and become an honest asset to the business. As an individual, I'm self-confident you’ll find me creative, funny and naturally passionate. I’m a forward thinker, which others may find inspiring when working as a team." };
  }

  render() {
    return <div className="short-info wow fadeInUp animated animated animated animated animated" style={{visibility: 'visible', 'animation-name': 'fadeInUp'}}>
						<h3>Objective</h3>
						<p>{this.state.objectiveText}</p>
					</div>;
  }

  componentDidMount() {
    
  }
}

export default Objective;
