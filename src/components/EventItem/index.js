import {Component} from "react"
import "./index.css"

class EventItem extends Component {
    onclickItem = () => {
        const {details, onclickEventItem} = this.props
        const {id, imageUrl, name, registrationStatus, location} = details
        onclickEventItem(id, registrationStatus)
    }

    render(){
        const {details, onclickEventItem, isItemClicked} = this.props
        const {id, imageUrl, name, registrationStatus, location} = details
    
        const clickedClassName = isItemClicked? "on-event-item-click": ""

        return( 
            <li className="event-item-container">
                <button className="event-btn" onClick={this.onclickItem}>
                    <img className={`event-img ${clickedClassName}`} src={imageUrl} alt="event" />
                </button>
                <p className="event-name"> {name} </p>
                <p className="event-location"> {location} </p>
            </li>
        )
    }
}

export default EventItem