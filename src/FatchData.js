import React, { Component } from 'react'

export default class FatchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }
      componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=88505975439ef9611fe0e1d1899a411d')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
    render() {
        console.log(this.state.data)
        return (

            <div>
                
            </div>
        )
    }
}
