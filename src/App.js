import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/logo';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
 import './App.css';



 const app = new Clarifai.App({
  apiKey: "25283f83e8954d2dbfff027b5b9dfd64"
  });
  
  const particlesOptions =  {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
  class App extends Component {
  constructor() {
  super();
  this.state = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignIn: false
  }  
  
}



calculateculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height),
  }
}

displayFaceBox = (box) => {
  this.setState({box})
}

  
  onInputChange = (event) => {
  this.setState({input: event.target.value})
  } 
  
  onButtonSubmit = () => {
  this.setState({ imageUrl: this.state.input });
  app.models
  .predict(
  Clarifai.FACE_DETECT_MODEL,
  this.state.input)
  .then(response => this.displayFaceBox(this.calculateculateFaceLocation(response)))
  .catch(err => console.log(err));  
  
}

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignIn: false})
    } else if (route === 'home') {
      this.setState({isSignIn: true})
    }
    this.setState({route: route});
  }

  render() {
   const { isSignIn, imageUrl, box, route } = this.state
  return (
  <div className="FancyButton">
      <Particles className='particles'
            params={particlesOptions}
    />
      <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange} />
      {route === 'home' 
      ? <div>
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit} 
      />
      <FaceRecognition box={box} imageUrl={imageUrl}/> 
    </div>
   : (
      route === 'signin'
     ? <Signin onRouteChange={this.onRouteChange} />
     : <Register onRouteChange={this.onRouteChange} />
    )
   }
    </div>
  ); 
 }
}
  
  export default App;
