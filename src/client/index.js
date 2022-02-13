import { checkForInput } from './js/nameChecker'
import {handleSubmit} from './js/formHandler'
import { onBlur,onFocus,onBlur1,onFocus1,onBlur2,onFocus2, daysBetween } from './js/formHandler'
import {fetchZip, fetchWeather, fetchImage} from './js/API'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForInput,
    handleSubmit,
    onBlur,
    onFocus,
    onBlur1,
    onFocus1,
    onBlur2,
    onFocus2,
    fetchZip,
    fetchWeather,
    fetchImage,
    daysBetween
}
//console.log(checkForInput);

