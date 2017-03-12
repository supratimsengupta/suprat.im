import React from 'react';

class Whatido extends React.Component {
  constructor() {
    super();
    this.state = { "whatIDoText": 'I have been working as a software developer since 2007, majorly in DotNet and JavaScript technologies, I have also worked in Java and little bit of Python, and am trying to get hold of functional programming both in JavaScript and Scala. I have a love of clean, elegant code, and I have lots of experience in the production of some. I am very inclined to problem solving and application architecture design. I also do take interests in Android Programming a bit and have interests in getting my hands dirty with some Raspberry Pi and Aurdino programming.' };
  }

  render() {
    return <div className="short-info wow fadeInUp animated animated animated animated animated" style={{visibility: 'visible', 'animation-name': 'fadeInUp'}}>
						<h3>What I Do ?</h3>
						<p>{this.state.whatIDoText}</p>
					</div>;
  }

  componentDidMount() {
    
  }
}

export default Whatido;
