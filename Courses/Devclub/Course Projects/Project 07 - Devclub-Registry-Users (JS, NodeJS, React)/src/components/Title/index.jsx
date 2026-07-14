import { StyledTitle } from "./styles";
import PropTypes from 'prop-types'

function Title({ children, ...props }) {
    return (
        <StyledTitle {...props}>{children}</StyledTitle>
    )
}

export default Title