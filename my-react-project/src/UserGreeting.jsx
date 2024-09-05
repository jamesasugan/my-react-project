import PropTypes from 'prop-types'

function UserGreeting(props){
    
    const welcomeMessage = <h2 className="bg-green-500 text-black font-semibold">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="bg-red-500 text-black font-semibold">Please log in to continue</h2>;
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting