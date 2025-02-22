//React
import React, { useCallback } from 'react'

//Style
import '../styles/global.css'

//React-router-dom
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    const goToPageHome = useCallback(() => {
        navigate('/');
    }, [navigate]);
  return (
    <div>
        <h1>Página não encontrada.</h1>
        <p>Gentileza volte para página inicial:</p>
        <button onClick={goToPageHome} className='btn-form btn-green'>Home</button>
    </div>
  )
}

export default NotFound
