import React  from 'react'
import WindowsHeader from '../elements/header/windows';
import MobileHeader from '../elements/header/mobile';

const ClientHeader = () => {

    return (
        <header className='pb-10'>
            <WindowsHeader />
            <MobileHeader />
        </header>
    )
}

export default ClientHeader