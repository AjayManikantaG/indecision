import React from 'react';

class Props extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((item) => {
          return <p key={item}>{item}</p>;
        })}
        {this.props.handleClick()}
      </div>
    );
  }
}

export default Props;
