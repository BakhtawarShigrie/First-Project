import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home02() {
  const [text, setText] = useState("");
  // onchange
  const onchange = (a) => {
    setText(a.target.value);
  };
  // Clear Text
  const clearText = () => {
    setText("");
    toast.success('Text Clear', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    
  };

  //Uppercase
  const Uppercase = () => {
    const text02 = text.toUpperCase();
    setText(text02);
    toast.error('Upper Case Latters', {
position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
  };

  //LOWERcase
  const Lowercase = () => {
    const text03 = text.toLowerCase();
    setText(text03);
    toast.warn('Lower Case Latters', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
  };

  // COPY
  const copytxt = () => {
    navigator.clipboard.writeText(text);
    toast.success('Text Copied', {
position: "bottom-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
  };

  // RemoveSpc
  const RemoveSpc = () => {
    const txt = text.split(/[  ]+/);
    setText(txt.join(" "));
    toast.info('Text Removed', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
  };

  const lighttheme = () => {
    document.getElementById('theme').style.backgroundColor = 'white';
    document.getElementById('theme').style.color = 'black';
  }
  const darktheme = () => {
    document.getElementById('theme').style.backgroundColor = 'black';
    document.getElementById('theme').style.color = 'white';
  }
  return (
    <>
      <div id="theme" className="container-fluid " style={{height:'100vh'}}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            // placeholder="Enter Your Text Here"
            value={text}
            onChange={onchange}
          ></textarea>
        </div>
        <button className="btn btn-primary mr-2" onClick={clearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mr-2" onClick={Uppercase}>
          Upper-Case
        </button>

        <button className="btn btn-primary mr-2" onClick={Lowercase}>
          lower-Case
        </button>

        <button className="btn btn-primary mr-2" onClick={copytxt}>
          Copy text
        </button>

        <button className="btn btn-primary mr-2" onClick={RemoveSpc}>
          Remove Spc
        </button>
        {/* //THEME  */}
        <button className="btn btn-primary"
        onClick={darktheme}
        style={{
          marginLeft:'5px',
        }}>
          Enable Dark Theme
        </button>
        <button
        className="btn btn-primary"
        onClick={lighttheme}
        style={{
          marginLeft:'5px',
        }}>
          Enable light Theme
        </button>

        <h1>Text Counter</h1>
        <p>
          {
            text.split(' ').filter((f)=>{
              return f.length !==0;
            }).length
          }{' '}
          words {text.length} charector
        </p>
        <h1>Read time</h1>
        <p>{0.008*
            text.split('').filter((f)=>{
            return f.length !==0;
            }).length
            }</p>

        <h1>Preview</h1>
        {text.length >0 ? text: "Write Something"}
      </div>
      <ToastContainer />
    </>
  );
}

export default Home02;
