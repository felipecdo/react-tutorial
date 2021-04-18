import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.color === 'pink'
        ? 'linear-gradient(45deg, #e34467 30%, #f57691 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 4,
    boxShadow: (props) =>
      props.color === 'pink'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 36,
    padding: '0 15px',
    margin: 5,
    textDecoration: 'none',
    textTransform: 'none',
    zIndex: 1,
  },
});

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.oneOf(['blue', 'pink']).isRequired,
};


export default MyButton;
