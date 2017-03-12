import React from 'react';
import Navigationbar from "./navigationbar.jsx";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return     <header class="header">
        <nav class="navbar navbar-custom" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>

                </div>

                <div class="collapse navbar-collapse" id="custom-collapse">
                    <Navigationbar/>
                </div>
            </div>
        </nav>
    </header>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;
