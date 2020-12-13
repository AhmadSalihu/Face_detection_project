import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return(
        <div className='center'>
          <div className='absolute mt2'>
            <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
            <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
            </div>      
          </div>
        </div>
    )
} 

export default FaceRecognition;



// import React, { Component } from 'react';
// import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';
// import Navigation from './Navigation/Navigation';
// import Logo from './Logo/Logo';
// import ImageLinkForm from './/ImageLinkForm/ImageLinkForm';
// import FaceRecognition from './FaceRecognition/FaceRecognition';
// import Rank from './Rank/Rank';
// import './App.css';





// const app = new Clarifai.App({
//   apiKey: '25283f83e8954d2dbfff027b5b9dfd64'
//  });

// const particlesOptions =  {
//   particles: {
//     number: {
//       value: 70,
//       density: {
//         enable: true,
//         value_area: 500
//       }
//     }
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//       imageUrl: '',
//       BOX: {},
//     }
//   }

// calculateFaceLocation = (data) => {
//   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
//   const image = document.getElementById('inputimage');
//   const width = Number(image.width);
//   const height = Number(image.height);
//   return {
//     leftCol: clarifaiFace.left_col * width,
//     topRow: clarifaiFace.top_row * height,
//     rightCol: width - (clarifaiFace.right_col * width),
//     bottomRow: height - (clarifaiFace.bottom_row * height),
//   }
// }

// displayFaceBox = (box) => {
//   this.setState({box: box})
// }

//   onInputChange = (event) => {
//     this.setState({input: event.target.value});
//   }

    
//   onButtonSubmit = () => {
//     this.setState({imageUrl: this.state.input})
//     app.models
//       .predict(
//         Clarifai.FACE_DETECT_MODEL,
//         this.state.input)
//       .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
//       .catch(err => console.log(err)) 
// }


//   render() {
//   return (
//     <div className="FancyButton">
//        <Particles className='particles'
//           params={particlesOptions}
//        />    
//       <Navigation />
//        <Logo />
//       <Rank /> 
//       <ImageLinkForm 
//         onInputChange={this.onInputChange} 
//         onButtonSubmit={this.onButtonSubmit}
//       />
//       <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
//     </div>
//   );
//  }
// }

// export default App;
