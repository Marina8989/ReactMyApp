import React from 'react';


function App( {title}) {
     return (
       <div>
          <div style={{padding: '2rem', 
          border: '1px solid green', 
          backgroundColor: 'grey', 
          color: 'white'}}
          >{title}</div>
       </div>
     ) 
}





// class App extends React.Component {
//      constructor(props) {
//           super(props)
//            this.state = {title: 'hello react'}
//      }
//    render(){
//       return <div>{this.state.title}</div>;
//    }
// }
 
export default App