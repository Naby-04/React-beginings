function Welcomefunc({ name, children }) {
  return (
    <>
      <h1>Bonjour {name}</h1>
      <p>{children}</p>
    </>
  );
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
      </>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const date = new Date();
    return (
      <>
        Il est {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: props.start,
    };
    this.timer = null;
  }
  componentDidMount() {
    window.setInterval(this.Incremente.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  Incremente() {
    this.setState((state, props) => ({
      n: state.n + props.step,
    }));
  }
  render() {
    return <div>Valeur : {this.state.n}</div>;
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return (
    <>
      <Welcome name="Naby" />
      <Welcome name="Sir Naby" />
      <Clock />
      <Incrementer start={0} />
      <Incrementer start={0} step={10} />
    </>
  );
}

ReactDOM.render(<Home />, document.querySelector("#App"));
