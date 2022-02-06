import { checkForInput,checkForURL, checkForZip } from './js/nameChecker'
import {handleSubmit, handleSubmit2, handleSubmit3} from './js/formHandler'
import { onBlur,onFocus,onBlur1,onFocus1,onBlur2,onFocus2 } from './js/formHandler'
import {createLanguageTable, appendLanguage, createCategoryTable, appendCategory} from './js/formHandler'
import {fetchLanguage, fetchCategory, fetchZip} from './js/API'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForInput,
    checkForURL,
    checkForZip,
    handleSubmit,
    handleSubmit2,
    handleSubmit3,
    onBlur,
    onFocus,
    onBlur1,
    onFocus1,
    onBlur2,
    onFocus2,
    createLanguageTable,
    appendLanguage,
    createCategoryTable,
    appendCategory,
    fetchLanguage,
    fetchCategory,
    fetchZip
}
//console.log(checkForInput);

