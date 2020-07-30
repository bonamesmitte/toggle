import React from 'react';
import ReactDOM from 'react-dom';
import Portal from './components/Portal';


class App extends React.Component {
  // The initial toggle state is false so the Portal element is out of view
  state = {
    on: false
  };
  toggle = () => {
    // Create a new "on" state to mount the Portal component via the button
    this.setState({
      on: !this.state.on
    });
  };
  // Now, let's render the components
  render() {
    const { on } = this.state;
    return (
      // The div where that uses the Portal component child
      <div>
        <header>
          <h1>Build Your Portal</h1>
        </header>
        <React.Fragment>
          <p> The button that toggles the Portal component state
          </p> The Portal parent is listening for the event
          <button onClick={this.toggle}>Toggle Portal</button>
          <p>Mount or unmount the Portal on button click </p>
          <Portal>
            {
              on ?
              // <Portal />
                <h1>This is a portal!</h1>
              : null
            }
          </Portal>
        </React.Fragment>
      </div>
    );
  }
}
export default App;