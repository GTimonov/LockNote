import React, {Component, useCallback} from 'react'
import './styles.scss'

import {inputChange} from '../../actions/creators'
import {connect} from 'react-redux'
const MAX_CHARS = 2000
function CreateNote(props) {
    const onChange = useCallback((e) => {
        const value = e.target.value
        //this.setState({value:value})
        this.props.dispatch(inputChange(value))
    }, [])

    const {value} = this.props
    const charsCount = value.length
    return (
        <div className="create-note">
            <label htmlFor="" className="max-chars-lbl">{`${MAX_CHARS - charsCount}/${MAX_CHARS}`}</label>
            <textarea type="text" onChange={onChange(e)} maxLength={MAX_CHARS} value={value} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {value: state.inputText}
}

export default connect(mapStateToProps)(CreateNote)
