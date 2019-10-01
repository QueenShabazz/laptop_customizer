import React, { Component } from 'react';
import FEATURES from './index';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Header from './Header';
import FeatureName from './FeatureName';
import Total from './Total';
import SummaryList from './SummaryList';
import Main from './Main.js'
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

class App extends Component {
   
  constructor (props){
    super(props);
    this.state = {
      features: FEATURES,
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  // render() {
  // return (
  //         <div key={itemHash} className="feature__item">
  //           <input
  //             type="radio"
  //             id={itemHash}
  //             className="feature__option"
  //             name={slugify(feature)}
  //             checked={item.name === this.state.selected[feature].name}
  //             onChange={e => this.updateFeature(feature, item)}
  //           />
  //           <label htmlFor={itemHash} className="feature__label">
  //             {item.name} ({USCurrencyFormat.format(item.cost)})
  //           </label>
  //         </div>
  //       );
  //     });

  //     return (
  //       <fieldset className="feature" key={featureHash}>
  //         <legend className="feature__name">
  //           <h3>{feature}</h3>
  //         </legend>
  //         {options}
  //       </fieldset>
  //     );
  //   });

    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];

    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });

    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );

    render() {
          // const total = Object.keys(this.state.selected).reduce(
          //     (acc, curr) => acc + this.state.selected[curr].cost,
          //     0
          //   );
    
    return (
      <div className="App">
        <Header />
        <Main />
        <FeatureName 
              updateFeature = {this.updateFeature}
              features = {this.props.features}
              selected = {this.state.selected}   
        />
        <SummaryList 
          selected= {this.state.selected}
          features = {this.state.features}
          name = {this.selectedOption}
          // selectedOption = {summary}
        />
        <Total 
          selected= {this.state.selected}
        />
      </div>
    )
    }
}

export default App;