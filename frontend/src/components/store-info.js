import React from "react"

class StoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storeList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/stores").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  render() {
    console.log("store info props: ", this.props)
    return (
      <div>
        {this.state.storeList.map(storeInfo => (
          <h2>{storeInfo.name}</h2>
        ))}
      </div>
    )
  }
}

export default StoreInfo
