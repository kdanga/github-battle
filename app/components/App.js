var React = require("react");
var Popluar = require("./Popular");

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popluar />
      </div>
    );
  }
}

module.exports = App;
