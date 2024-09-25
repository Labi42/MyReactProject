import PropTypes from 'prop-types'

function Student(props){

    return (
        <div>
            <p>Name: {props.name}, age: {props.age}, Student: {props.isstudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.PropTypes = {
    name: PropTypes.string, //nemohu zadat cislo atd.
    age: PropTypes.number,
    isstudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isstudent: false,
}

export default Student