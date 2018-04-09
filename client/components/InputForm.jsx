import React from 'react'
import FormPartyList from './FormPartyList'
import FormTotalError from './FormTotalError'

class InputForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      national: 0,
      labour: 0,
      greens: 0,
      nzfirst: 0,
      māori: 0,
      act: 0,
      top: 0,
      mana: 0,
      unitedfuture: 0,
      legalise: 0,
      other: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (list) {
    this.props.checkTotal(list)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  render () {
    const state = this.props.formState
    return (
      <div>
        <form>
          <FormPartyList list={this.state} max='100' handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
          <button type='button' onClick={() => this.handleSubmit(this.state)}>
            {'Next step: electorates'}
          </button>
        </form>
        {state.formError && <FormTotalError total={state.hundredPercent} />}
      </div>
    )
  }
}

export default InputForm
