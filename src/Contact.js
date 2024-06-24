import './contactPage.css'
import { useState } from 'react'
import { Toast } from 'bootstrap'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ContactPage = () => {
    const [fname, setFname] = useState(false)
    const [lname, setLname] = useState(false)
    const [textArea, setTextArea] = useState(false)
    const [emailAddress, setEmailAddress] = useState(false)
    const [radioClick, setRadioClick] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    const handleOnChange = (e) => {
        let componentId = e.target.id
        if (["exampleInputFirstName", "exampleInputLastName", "floatingTextarea2"].includes(componentId)) {
            if (e.target.value === "") {
                if (componentId === "exampleInputFirstName") {
                    setFname(true)
                    document.getElementById(componentId).style.border = '1px groove red'
                }
                if (componentId === "exampleInputLastName") {
                    setLname(true)
                    document.getElementById(componentId).style.border = '1px groove red'
                }
                if (componentId === "floatingTextarea2") {
                    setTextArea(true)
                    document.getElementById(componentId).style.border = '1px groove red'
                }
            }
            else {
                if (componentId === "exampleInputFirstName") {
                    setFname(false)
                    document.getElementById(componentId).style.border = '1px groove #90EE90'
                }
                if (componentId === "exampleInputLastName") {
                    setLname(false)
                    document.getElementById(componentId).style.border = '1px groove #90EE90'
                }
                if (componentId === "floatingTextarea2") {
                    setTextArea(false)
                    document.getElementById(componentId).style.border = '1px groove #90EE90'
                }
            }
        }
        else if (componentId === "exampleInputEmail1") {
            if (String(e.target.value)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) === null) {
                setEmailAddress(true)
                document.getElementById(componentId).style.border = '1px groove red'
            } else {
                setEmailAddress(false)
                document.getElementById(componentId).style.border = '1px groove #90EE90'
            }
        }
    }

    const handleRadioClick = () => {
        setRadioClick(false)
    }

    const handleCheckBoxClick = () => {
        setCheckBox(false)
    }

    const handleSubmit = () => {
        let radioButton1 = document.getElementById('inlineRadio1');
        let radioButton2 = document.getElementById('inlineRadio2');
        let cBox = document.getElementById('flexCheckDefault');
        if (!(radioButton1.checked || radioButton2.checked)) {
            setRadioClick(true)
        }
        if (!(cBox.checked)) {
            setCheckBox(true)
        }
        let fName = document.getElementById('exampleInputFirstName').value
        let lName = document.getElementById('exampleInputLastName').value
        let tArea = document.getElementById('floatingTextarea2').value
        let mail = document.getElementById('exampleInputEmail1').value
        let confirmation = true
        if (fName === "") {
            setFname(true)
            confirmation = false
            document.getElementById('exampleInputFirstName').style.border = '1px groove red'
        }
        if (lName === "") {
            setLname(true)
            confirmation = false
            document.getElementById('exampleInputLastName').style.border = '1px groove red'
        }
        if (tArea === "") {
            setTextArea(true)
            confirmation = false
            document.getElementById('floatingTextarea2').style.border = '1px groove red'
        }
        if (mail === "") {
            setEmailAddress(true)
            confirmation = false
            document.getElementById('exampleInputEmail1').style.border = '1px groove red'
        }
        if (!(radioButton1.checked || radioButton2.checked)) {
            confirmation = false
        }
        if (!(cBox.checked)) {
            confirmation = false
        }
        if (confirmation) {
            document.getElementById('liveToastBtn').click()
            const toastTrigger = document.getElementById('liveToastBtn')
            const toastLiveExample = document.getElementById('liveToast')
            if (toastTrigger) {
                const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample)
                toastTrigger.addEventListener('click', () => {
                    toastBootstrap.show()
                })
            }
        }
    }

    return (
        <div className="containerDiv">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" className="btn btn-primary" id="liveToastBtn" style={{ display: 'none' }}>Show live toast</button>
                <div className="toast-container position-fixed top-0 p-3">
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header" style={{backgroundColor:'black', color:'white'}}>
                            <CheckCircleOutlineIcon/>
                            <strong className="me-auto">Message Sent!</strong>
                        </div>
                        <div className="toast-body" style={{backgroundColor:'black', color:'white', borderRadius: '0px 0px 5px 5px'}}>
                            Thanks for completing the form. We'll be in touch soon!
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='title'>
                <h4>Contact Us</h4>
            </div>
            <form>
                <div className='name'>
                    <div className="mb-3 firstName">
                        <label htmlFor="exampleInputEmail1" className="form-label asterisk">First Name</label>
                        <input type="text" className="form-control bordering" id="exampleInputFirstName" aria-describedby="emailHelp" onChange={handleOnChange} onBlur={handleOnChange} />
                        {fname && <div id="emailHelp" className="form-text message">This field is required.</div>}
                    </div>
                    <div className="mb-3 lastName">
                        <label htmlFor="exampleInputEmail1" className="form-label asterisk">Last Name</label>
                        <input type="text" className="form-control bordering" id="exampleInputLastName" aria-describedby="emailHelp" onChange={handleOnChange} onBlur={handleOnChange} />
                        {lname && <div id="emailHelp" className="form-text message">This field is required.</div>}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label asterisk">Email address</label>
                    <input type="email" className="form-control bordering" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange} onBlur={handleOnChange} />
                    {emailAddress && <div id="emailHelp" className="form-text message">Please enter a valid email address.</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label asterisk">Select Query</label>
                    <div className='radios'>
                        <div className="form-check form-check-inline radio1 bordering">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={handleRadioClick} />
                            <label className="form-check-label" htmlFor="inlineRadio1">General Enquiry</label>
                        </div>
                        <div className="form-check form-check-inline radio2 bordering">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={handleRadioClick} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Support Request</label>
                        </div>
                    </div>
                    {radioClick && <div id="emailHelp" className="form-text message">Please select a query type.</div>}
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label asterisk">Message</label>
                    <div className="form-floating">
                        <textarea className="form-control bordering" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleOnChange} onBlur={handleOnChange}></textarea>
                        <label htmlFor="floatingTextarea2"></label>
                    </div>
                    {textArea && <div id="emailHelp" className="form-text message">This field is required.</div>}
                </div>
                <br />
                <div className="form-check">
                    <input className="form-check-input bordering" type="checkbox" value="" id="flexCheckDefault" onClick={handleCheckBoxClick} />
                    <label className="form-check-label asterisk" htmlFor="flexCheckDefault">
                        I consent to being contacted by the team
                    </label>
                </div>
                {checkBox && <div id="emailHelp" className="form-text message">To submit this form, please consent to being contacted.</div>}
                <br />
                <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage