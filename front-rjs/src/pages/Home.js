import React from 'react'
import Graph from '../components/Graph'

class Home extends React.Component {
  render(){
    return (
      <div>
        <label>Home </label>
        <div id="graphs_div">
          <Graph type="weight"/>
          <Graph type="price"/>
        </div>
      </div>
    );
  }
}
  
export default Home;