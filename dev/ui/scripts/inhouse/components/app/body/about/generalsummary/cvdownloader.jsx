import React from 'react';

class Cvdownloader extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <div className="download-button">
						<a className="btn btn-primary btn-lg" href="#"><i className="fa fa-download"></i>download my cv</a>
					</div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Cvdownloader;
