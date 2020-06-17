import React, { Component } from 'react';
import { formatPercentage, formatMoney } from '../helpers/formatters';

export default class InputReadOnly extends Component {
  render() {
    const { color = 'black', value, percentage, label } = this.props;

    const id = 'input' + label;
    let formattedValue = formatMoney(value);
    formattedValue += percentage > 0 ? ' ' + formatPercentage(percentage) : '';

    return (
      <div className="input-field col s12 m6 l3">
        <input
          id={id}
          type="text"
          value={formattedValue}
          style={{ color, fontWeight: 'bold' }}
          readOnly
        />
        <label className="active" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}
