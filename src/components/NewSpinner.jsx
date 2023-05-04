import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Spinner from 'react-bootstrap/Spinner';


const NewSpinner = () => {
    return (
        <Container style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} className='container'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>

    )
}

export default NewSpinner