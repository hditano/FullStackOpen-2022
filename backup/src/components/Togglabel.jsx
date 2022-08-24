import {useState} from 'react';
import PropTypes from 'prop-types'

const Togglabel = ({children, buttonLabel}) => {

  const [visible, setVisible] = useState(false);

  const hideWhenVisible = {display : visible ? 'none' : ''};
  const showWhenVisible = {display: visible ? '' : 'none'};

  return (
  <div>
    <div style={hideWhenVisible}>
      <button onClick={() => setVisible(true)}>{buttonLabel}</button>
    </div>
    <div style={showWhenVisible}>
      {children}
      <button onClick={() => setVisible(false)}>Hide</button>
    </div>
  </div>
  ) 
}
export default Togglabel;

Togglabel.propTypes = {
  buttonLabel : PropTypes.string.isRequired
}
