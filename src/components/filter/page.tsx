"use client"


import BackspaceIcon from '@mui/icons-material/Backspace';
import { Checkbox, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

const Filter = () => {

    const [brand, setBrand] = useState<string>('')

    return(
        <div className="flex mt-5 flex-col w-full max-w-screen shadow-[0px_0px_9px_4px_rgba(0,_0,_0,_0.1)] bg-white rounded p-4 md:mx-8 ">
            <div className='flex mb-4 w-full items-center justify-between'>
                <h1 className='text-lg text-black'>Filtros aplicados</h1>
                <IconButton><BackspaceIcon/></IconButton>
            </div>

            <div className='flex flex-col gap-5'>
                <FormControl sx={{ m: 1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-helper-label">Marca</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={brand}
                    label="Marca"
                    onChange={(e) => setBrand(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>Nenhum</em>
                    </MenuItem>
                    <MenuItem value={'Ford'}>Ford</MenuItem>
                    <MenuItem value={20}>Kia</MenuItem>
                    <MenuItem value={30}>Renault</MenuItem>
                    <MenuItem value={40}>Volkswagen</MenuItem>
                    <MenuItem value={50}>Citroen</MenuItem>
                    <MenuItem value={60}>Pejeot</MenuItem>
                    </Select>
                </FormControl>
                {/* <Divider/> */}
                <div className='flex flex-col gap-5'>
                    <h1 className='text-black'>Ano</h1>
                    <TextField type='number' placeholder='ex: 2020'/>
                    <h1 className='text-black'>Ou escolha um intervalo de tempo</h1>
                    <div className='flex gap-5'>
                        <TextField type='number' placeholder='Ano mínimo'/>
                        <TextField type='number' placeholder='Ano máximo'/>
                    </div>
                    <h1 className='text-black'>Preço</h1>
                    <TextField type='number' placeholder='Preço máximo'/>
                    <h1 className='text-black'>Kilometragem</h1>
                    <TextField type='number' placeholder='Kilometragem máxima'/>
                    <h1 className='text-black'>Câmbio</h1>
                    <div className='flex flex-col gap-3'>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Manual</p>
                        </div>
                         <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Automático</p>
                        </div>
                    </div>
                    <h1 className='text-black'>Combustível</h1>
                    <div className='flex flex-col gap-3'>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Gasolina</p>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Flex</p>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Elétrico</p>
                        </div>
                         <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Álcool</p>
                        </div>
                    </div>
                    <h1 className='text-black'>Categorias</h1>
                    <div className='flex flex-col gap-3'>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  defaultChecked/>
                            <p className='text-black'>Carros populares</p>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  />
                            <p className='text-black'>Hatches</p>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  />
                            <p className='text-black'>SUV's</p>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  />
                            <p className='text-black'>Sedans</p>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <Checkbox  />
                            <p className='text-black'>Picapes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Filter;