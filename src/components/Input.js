//PropTypes
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <input className={props.cssClass} type={props.inputType} name={props.inputName} id={props.inputId} onInput={props.onInput} value={props.value} placeholder={props.placeHolder} />
    )
};
Input.propTypes = {
    cssClass: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeHolder: PropTypes.string,
}
Input.defaultProps = {
    inputType: 'text',
};
export default Input