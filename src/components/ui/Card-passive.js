import classes from './Card-passive.module.css'

function CardPassive(props) {
  return <div className={classes.cardPassive}>{props.children}</div>;
}

export default CardPassive;
