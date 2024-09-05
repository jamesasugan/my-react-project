import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="border border-black rounded-md">
            <p className="font-semibold text-white">Name: {props.name}</p>
            <p className="font-semibold text-white">Age: {props.age}</p>
            <p className="font-semibold text-white">Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student