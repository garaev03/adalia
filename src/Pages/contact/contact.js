import { useState, useEffect } from 'react';
import Loading from "../../components/loading/loading"
import './contact.css'
import { Checkbox } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        window.scrollTo({ top: 0 })
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div>

            {
                loading ?
                    <Loading /> :
                    <div class="form-container">

                        <div class="image-left">
                        </div>

                        <div id="feedback-form">
                            <h2 className='text-2xl'>Bizimlə əlaqə saxla</h2>
                            <div>
                                <form>
                                    <input type="text" name="email" placeholder="Email"></input>
                                    <input type="text" name="name" placeholder="Ad"></input>
                                    <input type="text" name="surname" placeholder="Soyad"></input>
                                    <input type="text" id="feedback-phone" name="phone" placeholder="Telefon nömrəsi"></input>
                                    <input type="text" name="company-name" placeholder="Şirkətin adı"></input>
                                    <input type="text" name="company-website" placeholder="Şirkətin saytı"></input>
                                    {/* {/* <p name="company-website" >Servis xidməti</p>
                                    <div className='grid grid-cols-3'>

                                        <div>
                                            <Checkbox defaultChecked />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>
                                        <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>  <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>  <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>  <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>  <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>  <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div>  <div>
                                            <Checkbox />
                                            <label for="servis"> I have a bike</label>
                                            <br></br>
                                        </div> */}
                                    {/* </div> */}

                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '60ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div>
                                            <TextField
                                                id="standard-multiline-static"
                                                label="Mesaj"
                                                multiline
                                                rows={5}
                                                defaultValue=" "
                                                variant="standard"
                                            />
                                        </div>
                                    </Box> 

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>

                        <div class="image-right">
                        </div>
                    </div>
            }
        </div>
    )
}

export default Contact