import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer(){
    return(
      <footer className="bg-gray-100 p-8 flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:px-30">
        <div className=" text-gray-500 flex flex-row items-center justify-around space-x-4 gap-2 lg:">
        <span className='text-1xl font-bold'>Get in touch</span>
        <div className='flex space-x-4'>
        <a href='#' ><Linkedin /></a>
        <a href='#' ><Github /></a>
        <a href='#' ><Mail /></a>
        </div>
        </div>  
          <a href="/"  className='text-1xl font-bold underline text-gray-600'>
          Home page
          </a>
      </footer>
    )
  }