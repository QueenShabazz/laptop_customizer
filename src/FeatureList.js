import React, {Component} from 'react';
import FeatureOption from './FeatureOption';
import slugify from 'slugify';

class FeatureList extends Component{
    render(){
        const itemHash = slugify(JSON.stringify(this.props.options));
        return(
        <fieldset className="feature">
            <legend className="feature__name">
                <h3>{this.props.feature}</h3>
            </legend>
           <FeatureOption
                key={itemHash}
                options={this.props.options}
                feature={this.props.feature}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
           />
        </fieldset>
        )
    }
}

export default FeatureList