import React, {Component} from 'react';
import FeatureOption from './FeatureOption'
import slugify from 'slugify';

class FeatureName extends Component { 
  constructor(props){
    super(props);
    this.state = {
      selected:'',
      item:''
    }
  }
render() {
  const summary = Object.keys(this.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.state.selected[feature]; })
  const itemHash = slugify(JSON.stringify(this.state.item));
  const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));})
    })
    console.log(this.props)
  return(
    <div>
    {/* <h3>{this.feature}</h3>
    <fieldset className="feature" key={this.featureHash}>
      <legend className="feature__name"> */}
        <FeatureOption
          selected={this.props.selected} 
          features={this.props.features} 
          updateFeature={this.props.updateFeature}
        />
      {/* </legend>
      {this.options}
    </fieldset> */}
    
    </div>
    

  );
  
  }
}  


export default FeatureName;