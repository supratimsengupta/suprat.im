import React from 'react';
import About from './about/about.jsx';
import Resume from './resume/resume.jsx';

class Body extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return  <div>
                <About/>
                <Resume/>
            </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Body;
