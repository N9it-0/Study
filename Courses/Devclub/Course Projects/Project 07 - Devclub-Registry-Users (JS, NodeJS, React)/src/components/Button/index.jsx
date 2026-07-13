import { Button } from './styles'
import PropTypes from 'prop-types'

function DefaultButton({ children, beako, ...props }){
    //spread operator --> todo o resto
    //TypeScript --> JavaScript com Tipagem
    return (
        <Button {...props} beako={beako}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    beako: PropTypes.string, //Should've been "Theme" but I'm loosing my grip.
    children: PropTypes.node.isRequired
}

export default DefaultButton