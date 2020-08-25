import React from 'react'

function Navbar() {
    let url = 'https://i.pravatar.cc/150?img=39'
    let username = 'Pato'

    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img 
                    src={url} width="30" height="30" 
                    class="d-inline-block align-top rounded-circle mr-3" 
                    alt=''/>
                {username}
            </a>
        </nav>
    )
}

export default Navbar