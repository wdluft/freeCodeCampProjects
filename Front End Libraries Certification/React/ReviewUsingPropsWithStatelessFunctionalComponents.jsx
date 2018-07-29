class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="Will"/>
      </div>
    );
  }
};
// change code below this line
const Camper = (props) => {
    return <p>{ props.name }</p>
};

Camper.defaultProps = {
  name: "CamperBot"
}

Camper.propTypes = {name: PropTypes.string.isRequired}


const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
