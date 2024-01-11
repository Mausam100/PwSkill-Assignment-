function Button(props) {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    );
  }
  
  
  <Button text="Click me!" onClick={() => console.log("Button clicked")} />

  export default Button