
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
// const Header = (props) => {

  const location = useLocation()

  return (
    <header className='header'>
        {/* <h1> Task Tracker</h1> */}

        {/* inline css use gareko  */}
        {/* <h1 style={{color: "red", backgroundColor: "black"}}> {title} </h1> */}

        {/* internal css  */}  
        {/* <h1 style={headingStyle}> {title} </h1> */}


        <h1> {title} </h1>

        {/* <h1>{props.title} </h1> */}

        {location.pathname === "/" && <Button color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add"} onClick={onAdd} />}
    </header>
  )
}

// it work when no props passed from parent component
Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  tilte: PropTypes.string,
}


// css in js --> css laai variable maa assign gareko ********
// const headingStyle = {
//   color: "red", 
//   backgroundColor: "black"
// }

export default Header