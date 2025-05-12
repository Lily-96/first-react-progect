const buttonComponent = function (props) {
  console.log("PROPS", props);
  return (
    <button className="button-component">
      <span>{props.content}</span>
    </button>
  );
};

export default buttonComponent;
