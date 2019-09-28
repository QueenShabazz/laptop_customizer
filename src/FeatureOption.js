import React, {Component} from 'react';
import slugify from 'slugify';
    // This object will allow us to
    // easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    
class FeatureOption extends Component { 
  updateFeature (feature, item) {
    this.props.updateFeature(feature, item)
  }
  render(){
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
      
        return (
          <div key={itemHash} className="feature__item">
            <h1>test</h1>
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
        </div>
        );
      })

    }) 
    let options 
    const featureTest = Object.keys(this.props.features).map((feature) =>{ 
      options = this.props.features[feature].map((item, index)=> { 
      // const featureHash = feature + '-' + idx;    
        return(
          <input value={this.props.features[feature][index].name} type ="input" name="test"/>
        )
      })
      return(
        <div>
          {feature}
          {options}
        </div>
      )
    })

return(
  
  <div>{featureTest}</div>
)

    
  }
}
export default  FeatureOption;