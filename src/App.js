import React from 'react';


class App extends React.Component {
     constructor(props) {
          super(props)
           this.state = {title: 'hello react'}
     }
   render(){
      return <div>{this.state.title}</div>;
   }
}
 
export default App