// ImageSlider.js
import React, { Component } from 'react';
import './ImageSliderControls.css';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg'
      ],
      currentIndex: 0,
      intervalId: null,
      isSliderRunning: false,
      showSlider: true
    };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    const intervalId = setInterval(this.nextSlide, 4000); // Change slide every 4 seconds
    this.setState({ intervalId, isSliderRunning: true });
  };

  stopSlider = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null, isSliderRunning: false });
  };

  toggleSlider = () => {
    if (this.state.isSliderRunning) {
      this.stopSlider();
    } else {
      this.startSlider();
    }
  };

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length
    }));
  };

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex === 0
        ? prevState.images.length - 1
        : prevState.currentIndex - 1
    }));
  };

  toggleSliderVisibility = () => {
    this.setState(prevState => ({
      showSlider: !prevState.showSlider
    }));
  };

  render() {
    const { images, currentIndex, isSliderRunning, showSlider } = this.state;

    return (
      <div>
        <h1>Image Slider</h1>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

        <div className="image-slider-controls">
          <button onClick={this.prevSlide}>Previous</button>
          <button onClick={this.nextSlide}>Next</button>
          <button onClick={this.toggleSlider}>{isSliderRunning ? 'Stop' : 'Start'}</button>
          <button onClick={this.toggleSliderVisibility}>{showSlider ? 'Hide Slider' : 'Show Slider'}</button>
        </div>

        {showSlider && (
          <div>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ImageSlider;
