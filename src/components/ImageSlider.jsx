// ImageSlider.jsx

import React, { Component } from 'react';
import './ImageSlider.css'; // Import your CSS file if needed

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currentIndex: 0,
      isPlaying: false,
      intervalId: null
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handlePrev = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length
    }));
  };

  handlePlay = () => {
    if (!this.state.isPlaying) {
      const intervalId = setInterval(this.handleNext, 2000); // Adjust autoplay speed as needed
      this.setState({ isPlaying: true, intervalId });
    }
  };

  handleStop = () => {
    if (this.state.isPlaying) {
      clearInterval(this.state.intervalId);
      this.setState({ isPlaying: false, intervalId: null });
    }
  };

  render() {
    return (
      <div className="image-slider">
        {/* Render the current image */}
        <img src={`images/${this.state.images[this.state.currentIndex]}`} alt="Slider" />

        {/* Add buttons for next, prev, play, and stop */}
        <div className="controls">
          <button onClick={this.handlePrev}>Prev</button>
          <button onClick={this.handleNext}>Next</button>
          <button onClick={this.handlePlay}>Play</button>
          <button onClick={this.handleStop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
