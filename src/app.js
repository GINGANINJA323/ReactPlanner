import * as React from 'react';
import ReactCalendar from 'react-calendar';
import ViewBar from './components/viewBar';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'month'
    }
  }

  render() {
    return (
      <>
        <h1>{'React Planner'}</h1>
        <ViewBar
          options={['month', 'year']}
          value={this.state.currentView}
        />
        <ReactCalendar
          view={this.state.currentView}
        />
      </>
    );
  }
}

export default App;