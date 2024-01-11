
function Person(props) {
    return (
      <p>
        {props.name} is {props.age} years old.
      </p>
    );
  }
  
  <Person name="John" age="30" />

  export default Person