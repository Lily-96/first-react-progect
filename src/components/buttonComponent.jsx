const buttonComponent = function (props) {
  console.log("PROPS", props);
  return (
    <button>
      <span>{props.content}</span>
    </button>
  );
};

export default buttonComponent;
