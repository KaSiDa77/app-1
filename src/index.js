

/*class Person extends React.Component{
    render() {
       return <h1>This is a person who is 55 years old.</h1>
    }
}
ReactDOM.render(<Person/>, document.getElementById("root"))*/

/*function Hello(){
    return <h1>This is a human from Earth. Hello.</h1>
}
ReactDOM.render(<Hello/>, document.getElementById("root"))*/
import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

class MyForm extends React.Component {

constructor(props) {

super(props);

this.state = {

result: 0

};

this.op1Ref = React.createRef();

this.op2Ref = React.createRef();

this.resultRef = React.createRef();

}

mysubmit = () => {

const op1 = this.op1Ref.current.value;

const op2 = this.op2Ref.current.value;

this.resultRef.current.innerHTML = `Result: ${op1 * op2}`;

}

render() {

return (

<form>

<div className="container">

<h1 >Multiply</h1>

<div className="form-group">

<label> Enter Operand 1 </label>

<input type="number" id="num1"

ref={this.op1Ref}

placeholder="Enter Operand 1" />

</div>

<div className="form-group">

<label> Enter Operand 2 </label>

<input type="number" id="num2"

ref={this.op2Ref}

placeholder="Enter Operand 2" />

</div>

<div>

<p ref={this.resultRef}></p>

</div>

<div>

<button type="button" className="btn" onClick={() => this.mysubmit()}>Multiply</button>

</div>

</div>

</form>

);

}

}

ReactDOM.render(<MyForm />, document.getElementById('root'));