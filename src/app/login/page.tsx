"use client"
import { useWindowSize } from "@/hooks/window"
import { Button, TextField } from "@mui/material"
import logo from '#/public/logo.png'
import logo2 from '#/public/logo2.png'
import Image from "next/image"

const Auth = () => {

    const {width, height} = useWindowSize() 
    return(
        <>
        {width && (
            width > 800 ? (

                <div className="bg-gradient-to-tl from-blue-700 to-blue-950 w-screen h-screen flex justify-end items-end ">
                    <div className="rounded-tl-[400px] bg-white w-2/4 h-full flex flex-col items-center gap-10 justify-center">
                        <Image src={logo2} alt="logo" className="w-3/4"/>
                        <div className="flex flex-col gap-3 w-3/4">
                            <TextField id="standard-basic" label="Email" variant="standard" />
                            <TextField id="standard-basic" type="password" label="Senha" variant="standard" />
                        </div>
                        <Button variant="contained" sx={{width: 160}}>
                            Logue-se
                        </Button>
                    </div>
                   
                </div>
            ) : (

                <div className="bg-gradient-to-tl from-blue-700 to-blue-950 w-screen h-screen flex items-center justify-center ">
                    <div className="rounded-xl bg-white w-5/6 h-3/4 flex flex-col gap-6 items-center justify-center p-6 ">

                     <Image src={logo2} alt="logo" className="w-3/4 min-w-[300px]"/>
                        <div className="flex flex-col gap-3 w-3/4">
                            <TextField id="standard-basic" label="Email" variant="standard" />
                            <TextField id="standard-basic" type="password" label="Senha" variant="standard" />
                        </div>
                        <Button variant="contained" sx={{width: 160}}>
                            Logue-se
                        </Button>

                    </div>
                </div>
                
            )
        )}
        </>
    )
}

export default Auth