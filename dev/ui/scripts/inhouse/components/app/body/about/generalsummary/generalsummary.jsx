import React from 'react';
import Objective from './objective.jsx';
import WhatIDo from './whatido.jsx';
import Cvdownloader from './cvdownloader.jsx';

class Generalsummary extends React.Component {
  constructor() {
    super();
  }

  render() {
    return 		<div className="col-md-8 col-md-pull-4">
                <Objective/>
                <WhatIDo/>
                <Cvdownloader/>
			      	</div>
  }

  componentDidMount() {

  }
}

export default Generalsummary;
