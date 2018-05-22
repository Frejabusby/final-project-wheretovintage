import React from "react"

class StoresList extends React.Component {
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
    return (
      <div className="storelist-section">
        {this.state.storeList.map(store => (
          <div className="store-container">
          <h2>{store.name}</h2>
          <div className="storelist-text">
            <h3><a href={`tel: require(${store.phoneNumber})`}>{store.phoneNumber}</a></h3>
            <p>{store.street}</p>
            <p>{store.zipcode}</p>
            <p>{store.city}</p>
            <p>{store.description}</p>
          </div>
        </div>
        ))}

      </div>
    )
  }
}

export default StoresList
