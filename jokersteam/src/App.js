import logo from './images/sh-logo-dark.png';
import './App.css';
import { useState } from 'react';


function App() {

    const [message, setMessage] = useState( < img src = { logo }
            / >)

            const textHandler = (event) => {
                if (event.target.value != null || event.targe.value != "") {

                    setMessage(event.target.value)
                }

                if (event.target.value === "" || event.target.value === null) {

                    setMessage( < img src = { logo }
                        / >)
                    }
                }


                return ( <
                    div className = 'App' >

                    <
                    div className = 'logoHolder' >

                    { message }

                    <
                    /div> <
                    div className = 'textInputField' >
                    <
                    input type = 'text'
                    onChange = { textHandler }
                    / > < /
                    div >

                    <
                    div className = 'searchButton' >
                    <
                    button > Google Search < /button> <button> I'm Feeling Lucky</button >
                    <
                    /div> 

                    <
                    div className = 'languageText' >
                    <
                    span > Google offered in: < a href = '' > Hausa < /a> <a href=''>Igbo</a > < a href = '' > Èdè Yorùbá < /a> <a href=''>Nigerian Pidgin</a > < /span > < /
                    div > < /
                    div >
                );
            }

            export default App;