import * as React from 'react';

class ViewBar extends React.Component {
  render() {
    return (
      <>
        {this.props.options.map(o => (
          <button className={'viewBarButton'} label={o} />
        ))}
      </>
    );
  }
}

export default ViewBar;