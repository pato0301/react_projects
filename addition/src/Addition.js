import React from 'react'
import './Addition.css'

class Addition extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            input: "",
            incorrect: false,
            corrects: 0
        }
    }

    answer = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    check = () => {
        const num1 = this.state.num1
        const num2 = this.state.num2
        const answer = parseInt(this.state.input)
        if(answer === num1 + num2){
            this.setState(state => ({
                num1: Math.ceil(Math.random() * 10),
                num2: Math.ceil(Math.random() * 10),
                corrects: state.corrects + 1,
                input: ""
            }))
            if (this.state.incorrect){
                this.setState(state => ({
                    incorrect: !state.incorrect
                }))
            }
        }
        else{
            if (!this.state.incorrect) {
                this.setState(state => ({
                    incorrect: !state.incorrect,
                    input: ""
                }))
            }
            else{
                this.setState({
                    input: ""
                })
            }
        }
    }

    render(){
        return (
            <div>
                <h1 className={this.state.incorrect?"incorrect":""}>{this.state.num1} + {this.state.num2}</h1>
                <input onChange={this.answer} type="text" value={this.state.input}/>
                <button onClick={this.check}>Check</button>
                <p>Score: {this.state.corrects}</p>
            </div>
        )
    }
}


export default Addition;