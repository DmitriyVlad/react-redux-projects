import React, { Component } from 'react';

export default class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: {}
    };

    this.tick = this.tick.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

  tick() {
    this.setState({
      deadline: this.getTimeRemaining(this.props.deadline)
    });

    if (this.state.deadline.total <= 0) {
      clearInterval(this.interval);
    }
  }

  getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  componentDidMount() {
    this.setState({
      deadline: this.getTimeRemaining(this.props.deadline)
    });

    this.interval = setInterval(this.tick, 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { days, minutes, hours, seconds } = this.state.deadline;

    days = ('0' + days).slice(-2).split('');
    hours = ('0' + hours).slice(-2).split('');
    minutes = ('0' + minutes).slice(-2).split('');
    seconds = ('0' + seconds).slice(-2).split('');

    return (
      <div className="CountdownTimer">
        <div className="CountdownTimer__block">
          <h4 className="CountdownTimer__title">Days</h4>
          <div className="CountdownTimer__digits">
            <span className="CountdownTimer__digit">{days[0]}</span>
            <span className="CountdownTimer__digit">{days[1]}</span>
          </div>
        </div>
        <div className="CountdownTimer__block">
          <h4 className="CountdownTimer__title">Hours</h4>
          <div className="CountdownTimer__digits">
            <span className="CountdownTimer__digit">{hours[0]}</span>
            <span className="CountdownTimer__digit">{hours[1]}</span>
          </div>
        </div>
        <div className="CountdownTimer__block">
          <h4 className="CountdownTimer__title">Minutes</h4>
          <div className="CountdownTimer__digits">
            <span className="CountdownTimer__digit">{minutes[0]}</span>
            <span className="CountdownTimer__digit">{minutes[1]}</span>
          </div>
        </div>
        <div className="CountdownTimer__block">
          <h4 className="CountdownTimer__title">Seconds</h4>
          <div className="CountdownTimer__digits">
            <span className="CountdownTimer__digit">{seconds[0]}</span>
            <span className="CountdownTimer__digit">{seconds[1]}</span>
          </div>
        </div>
      </div>
    );
  }
}
