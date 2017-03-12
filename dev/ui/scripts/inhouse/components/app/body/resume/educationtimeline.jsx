import React from 'react';
import Timeline from './timeline.jsx';

class Educationtimeline extends React.Component {
  constructor() {
    super(); 
    this.state =  {
                    title:'Experience', 
                    workItems:[
                        {
                            dateRange:"2006-2007", 
                            title:"Jr. Software Engineer", 
                            location:"FourthMedia Interactive, Ahmedabad, Gujarat", 
                            description:"I joined here as a fresher right after college. Primarily as a C# 2.0 and ASP.NET web application developer. I worked on sevaral projects with the same technologies."
                        },
                        {
                            dateRange:"2006-2007", 
                            title:"Jr. Software Engineer", 
                            location:"FourthMedia Interactive, Ahmedabad, Gujarat", 
                            description:"I joined here as a fresher right after college. Primarily as a C# 2.0 and ASP.NET web application developer. I worked on sevaral projects with the same technologies."
                        },
                        {
                            dateRange:"2006-2007", 
                            title:"Jr. Software Engineer", 
                            location:"FourthMedia Interactive, Ahmedabad, Gujarat", 
                            description:"I joined here as a fresher right after college. Primarily as a C# 2.0 and ASP.NET web application developer. I worked on sevaral projects with the same technologies."
                        }
                    ]
                 };

  }

  render() {
    return <Timeline key="educationtimeline" lineItems={this.state.workItems}/> ; 
  }

  componentDidMount() {
    
  }
}

export default Educationtimeline;
