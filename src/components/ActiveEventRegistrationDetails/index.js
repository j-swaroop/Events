import {Component} from "react"
import "./index.css"

const registrationStatusConstants = {
    yetToRegister : 'YET_TO_REGISTER',
    registered: 'REGISTERED',
    registrationClosed: 'REGISTRATIONS_CLOSED',
    
}

class ActiveEvent extends Component{
    
    renderNoActiveEventView = () => {
        return(
            <p className="active-event-heading"> Click on an event, to view its registration details</p>
        )
    }

    renderYetToRegisterView = () => {
        return(
            <div className="active-event-container">
                <img alt="yet to register" className="yet-to-register-img"
                    src="https://assets.ccbp.in/frontend/react-js/events-register-img.png" />
                <p className="yet-rigister-description"> A live performance brings so much to your relationship with dance. Seeing dance live 
                    can often make you fall totally in love with this beautiful art form. </p>
                <button className="register-btn"> Register Here </button>
            </div>
        )
    }

    renderRegisteredView = () => {
        return(
            <div className="active-event-container">
                <img className="registered-img" alt="registered"
                    src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"/>
                <h1 className="registered-decription"> You have already registered for the event </h1>
            </div>
        )
    }

    renderRegistrationClosedView = () => {
        return(
            <div className="active-event-container">
                <img src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png" 
                    alt="registrations closed"  className="registration-closed-img"/>
                <h1 className="registration-closed-heading"> Registrations Are Closed Now!</h1>
                <p className="registration-closed-description"> Stay tuned. We will reopen the registrations soon!</p>
            </div>
        )
    }

    render(){
        const {registrationStatusText} = this.props

        switch(registrationStatusText){
            case (registrationStatusConstants.yetToRegister):
                return this.renderYetToRegisterView()
            case (registrationStatusConstants.registered):
                return this.renderRegisteredView()
            case (registrationStatusConstants.registrationClosed):
                return this.renderRegistrationClosedView()
            default:
                return this.renderNoActiveEventView()
        }
        
    }
}

export default ActiveEvent