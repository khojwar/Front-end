import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header sticky top-0 z-10 bg-black text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center'>
        <Link to={'/'}> <div> Filmy<span className='text-white'>Verse</span> </div></Link>
        <Link to={'/addmovie'}> <div className='text-lg  cursor-pointer flex items-center'> 
            <Button> <AddIcon className='mr-1' color='secondary' /> <span className='text-white'>Add new</span> </Button>
        </div></Link>
    </div>
  )
}

export default Header