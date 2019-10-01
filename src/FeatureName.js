import React, {Component} from 'react';
import FeatureOption from './FeatureOption'

class FeatureName extends Component { 
  constructor(props){
    super(props);
    this.state = {
      selected:'',
      item:''
    }
  }
render() {
  const features = Object.keys(this.props.features)
    .map((feature, idx) => {
      const featureHash = feature + '-' + idx;      
      return(
            <FeatureOption
                key={featureHash}
                feature={feature}
                options={this.props.features[feature]}
                selected={this.props.selected} 
                updateFeature={this.props.updateFeature}
            />
      );
      }); 
    return(
          <form>

            {features}
          </form>
    );
  }
}
// const summary = Object.keys(this.state.selected).map((feature, idx) => {
//     const featureHash = feature + '-' + idx;
//     const selectedOption = this.state.selected[feature]; })
//     console.log(features)
//   const itemHash = slugify(JSON.stringify(this.state.item));
  
//     console.log(this.state.selected)

export default FeatureName;