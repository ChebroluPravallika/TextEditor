import {Component} from 'react'

import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, TextArea} from './styledComponents'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    textInput: '',
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBtn1 = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickBtn2 = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickBtn3 = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {textInput, isBold, isItalic, isUnderlined} = this.state

    return (
      <div className="bg-container">
        <div className="background">
          <div className="leftCont">
            <h1 style={{color: 'white'}}>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              style={{padding: '30px'}}
            />
          </div>
          <div className="container">
            <ul
              style={{listStyle: 'none', display: 'flex', flexDirection: 'row'}}
            >
              <li>
                <Button
                  type="button"
                  onClick={this.onClickBtn1}
                  data-testid="bold"
                  istrue={isBold}
                >
                  <VscBold fontSize="25px" className="icon" />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  onClick={this.onClickBtn2}
                  data-testid="italic"
                  istrue={isItalic}
                >
                  <GoItalic fontSize="25px" className="icon" />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  onClick={this.onClickBtn3}
                  data-testid="underline"
                  istrue={isUnderlined}
                >
                  <AiOutlineUnderline fontSize="25px" className="icon" />
                </Button>
              </li>
            </ul>
            <hr />

            <TextArea
              rows={30}
              cols={50}
              ref={this.myRef}
              bold={isBold}
              italic={isItalic}
              underline={isUnderlined}
              id="textarea"
              onChange={this.onChangeTextInput}
              value={textInput}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
