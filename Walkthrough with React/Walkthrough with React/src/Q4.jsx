function List(props) {
    const listItems = props.items.map((item) =>
      <li key={item}>{item}</li>
    );
    
    return <ul>{listItems}</ul>;
  }
  
  // Usage
  <List items={['apple', 'banana', 'orange']} />

  export default List