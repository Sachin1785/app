
import React from 'react';
import UserCard from './usercard';
import UserSideBar from './UserSideBar';
import TopBar from './topbar';

function PortfolioPage()
{
    return (
        <>
            <div>
                <TopBar></TopBar>
            </div>
            < UserSideBar >
            </UserSideBar>
{/* 
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>

            </div> */}
        </>
    );
}
export default PortfolioPage;