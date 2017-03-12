import React from 'react';

class Navigationbar extends React.Component {
  constructor() {
    super();
    this.state = { 
        menuItems: ['About', 'Resume', 'Skills'], 
        currentActive: null  
    };
  }

  render() {
    return <ul class="nav navbar-nav navbar-right">
            {this.state.menuItems.map(function(menuItem){
                return <li class="" key={menuItem}><a href="#about">{menuItem}</a></li>
            })}
          </ul>;
  }

  componentDidMount() {
    
  }
}

export default Navigationbar;
