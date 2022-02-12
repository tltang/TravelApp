import { checkForInput } from './js/nameChecker'
import {handleSubmit, handleSubmit3} from './js/formHandler'
import { onBlur,onFocus,onBlur1,onFocus1,onBlur2,onFocus2, daysBetween } from './js/formHandler'
import {createLanguageTable, appendLanguage, createTripTable, appendTrip} from './js/formHandler'
import {fetchLanguage, fetchZip, fetchWeather, fetchImage} from './js/API'
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
    createTripTable,
    appendTrip,
    fetchZip,
    fetchWeather,
    fetchImage,
    daysBetween
}
//console.log(checkForInput);

