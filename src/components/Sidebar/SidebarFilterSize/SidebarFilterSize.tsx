import React from 'react'
import "./SidebarFilterSize.style.scss"

const SidebarFilterSize = () => {
    return (
        <div className="sidebar__sizing py-4 text-white">
            <p>قیمت</p>

            <div className="form-floating mb-3">
                <input type="number" min={1000000} max={100000000} className="form-control" id="floatingInput"
                       placeholder="name@example.com"/>
                <label htmlFor="floatingInput" className={'text-black'}>حداقل</label>
            </div>
            <div className="form-floating">
                <input type="number" min={1000000} max={100000000} className="form-control text-black"
                       id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword" className={'text-black'}>حداکثر</label>
            </div>

        </div>
    )
}

export default SidebarFilterSize
