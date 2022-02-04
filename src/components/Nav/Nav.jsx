import React, { useState, Suspense } from 'react';

const MainNavBar = React.lazy(() => import('./../../components/MainNavBar/MainNavBar'));
const SideNavBar = React.lazy(() => import('./../../components/SideNavBar/SideNavBar'));

const Nav = () => {
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    const toggle = () => {
        return setDisplaySideMenu(!displaySideMenu);
    };

    window.addEventListener('wheel', (e) => {
        if (displaySideMenu) {
            setDisplaySideMenu(false)
        }
    });
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <MainNavBar toggle={toggle} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <SideNavBar showSideBar={displaySideMenu} toggle={toggle} />
            </Suspense>
        </>
    );
};

export default Nav;
