import React, { Component } from 'react';
import {Button} from 'reactstrap'

// dark blue: #2F478F
// light blue: #6FD4F0

class App extends Component {
  render() {
    return <div className="home-background">
      <div className="home-panel" style={{textAlign: 'center'}}>
        <img className="rhythm" src="rhythm.png"/>
        <div style={{textAlign: 'center'}}>
          <Button color="dark" size="lg" onClick={() => window.location.assign('/activity')}>Saturday Activity Info</Button>
          <hr style={{opacity: 0}}/>
          <Button color="dark" disabled size="lg">Follow-Up Study<br/><sub>Coming Soon</sub></Button>
        </div>
      </div>
    </div>
  }
}

export default App;
