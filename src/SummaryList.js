import React, {Component} from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryList extends Component {
  render(){
    // const summary = Object.keys(this.state.selected).map(
    //   (feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];    
    
    // }
      
    //   )
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const selectedOption = this.props.selected[feature]; 
      return (
        <div className="summary__option" key={this.featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      )
    })
    return (
      summary
    )
  }
}

export default SummaryList;