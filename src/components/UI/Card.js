import "./Card.css";

const Card=(props)=>{
  const classCard = "card" + props.className;

  return <div className={props.className + "card"}>{props.children}</div>;
}

export default Card;
