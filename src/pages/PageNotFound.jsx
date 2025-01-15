import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
    return (
        <>
            <section className='page notfound'>
                <div className="content">
                    <img src="/notfound.gif" alt="notfound" />
                    <Link to={'/'}>RETURN TO HOME PAGE</Link>
                </div>
            </section>
        </>

    )
}

export default PageNotFound