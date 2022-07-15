import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title, onShow }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button onClick={onShow} color='green' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
