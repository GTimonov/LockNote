import React, { useCallback} from 'react'
import './styles.scss'
import {inputChange} from '../../actions/creators'
import {useSelector, useDispatch} from 'react-redux'
const MAX_CHARS = 2000
function CreateNote(props) {
    const dispatch = useDispatch()
    const onChange = useCallback((e) => {
        const value = e.target.value
        //this.setState({value:value})
        dispatch(inputChange(value))
    }, [dispatch])

    const value = useSelector(state => state.inputText)
    const charsCount = value ? value.length : 0
    return (
        <div className="create-note">
            <label htmlFor="" className="max-chars-lbl">{`${MAX_CHARS - charsCount}/${MAX_CHARS}`}</label>
            <textarea type="text" onChange={onChange} maxLength={MAX_CHARS} value={value} />
        </div>
    )
}
export default CreateNote
