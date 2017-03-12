import React from 'react';

class Biodata extends React.Component {
  constructor() {
    super();
    this.state = { 
        fullName: 'Supratim Sengupta',
        birthDate: '17 April 1981',
        address: ' 3410 HIG appartments, Vasant Kunj, New Delhi - 110070',
        nationality: 'Indian',
        phone: '+91 8130858899',
        email: 'supratim.sengupta@gmail.com'
             };
  }

  render() {
    return 		<div className="col-md-4 col-md-push-8">
					<div className="biography">
						<div className="myphoto">
							<img src="assets/images/myphoto.jpg" alt="" />
						</div>
						<ul>
							<li><strong>Name:</strong>{this.state.fullName} </li>
							<li><strong>Date of birth:</strong> {this.state.birthDate}</li>
							<li><strong>Address:</strong>{this.state.address}</li>
							<li><strong>Nationality:</strong> {this.state.nationality}</li>
							<li><strong>Phone:</strong> {this.state.phone}</li>
							<li><strong>Email:</strong> {this.state.email}</li>
						</ul>
					</div>
				</div>;
  }

  componentDidMount() {
    
  }
}

export default Biodata;
