import PropTypes from 'prop-types'

function UserGreeting(Props){
    if(Props.isLoggedIn){
        return <h2>Welcome {Props.username}</h2>
    } else {
        return <h2>Please log in to continue</h2>
    }
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting