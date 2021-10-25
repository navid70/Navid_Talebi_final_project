import React from 'react'
import {BiShoppingBag, BiSearch} from "react-icons/bi";
import "./SidebarChidren.style.scss"

const SidebarChidren = ({children}: any): JSX.Element => {
    return (
        <>
            <div className="d-flex sidebar-section__title align-items-center justify-content-between py-4 text-white">
                <small className="m-0 text-white">:فیلترهای انجام شده</small>
                <small style={{color: "#f16422"}}>حذف فیلترها</small>
            </div>
            <div className="sidebar__filterd py-4">
                <p>برند</p>
                <form>
                    {children}
                </form>
            </div>
        </>
    )
}

export default SidebarChidren
