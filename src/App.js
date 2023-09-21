import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'rayen ben rhim',
        bio: 'A passionate React developer',
        imgSrc: 'https://placekitten.com/200/200',
        profession: 'Software Engineer',
      },
      show: false,
      mountTime: new Date(),
    };
  }

  componentDidMount() {
    // Set up an interval to update the mountTime every second
    this.interval = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <div>
        <h1>Person Profile App</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <p>Name: {fullName}</p>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>
          Time interval since last component mount: {this.calculateMountTime(mountTime)}
        </p>
      </div>
    );
  }

  calculateMountTime = (mountTime) => {
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - mountTime) / 1000);
    return `${timeDifference} seconds`;
  };
}

export default App;

