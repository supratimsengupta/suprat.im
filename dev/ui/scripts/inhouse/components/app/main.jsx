import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom'
import Header from './header/header.jsx';
import Body from './body/body.jsx';

ReactDOM.render(<div>
              <div id="tt-preloader" style={{display: 'none'}}> 
                <div id="pre-status" style={{display: 'none'}}> 
                  <div className="preload-placeholder"></div> 
                </div> 
              </div> 
            <Header/>
            <Body/>
          </div>, document.getElementById("root"));