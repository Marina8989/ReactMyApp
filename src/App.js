import React from 'react';
import './index.css'


function App( {title}) {
     return (
       <div>
          <div className="bg-gray-600 text-white p-5 border">{title}</div>
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