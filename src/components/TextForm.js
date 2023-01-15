import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");

  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");

  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }

  const len = (word)=>{
    if(word===""){
      return 0;
    }
    else{
      let res = word.split(/[ ]+/);
      // let res = tmp.join(" ");
      // return res.trim().split(" ").length;
      return res.join(" ").trim().split(" ").length;
    }
  }

  const [text, setText] = useState('Enter text here');
  // setText("new text");
  return (
    <>
    <div className="Container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{len(text)} words and {text.length} characters</p>
      <p>{0.008 * len(text)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
