import React from 'react'
import {BiHeart} from "react-icons/bi";
import {IProduct} from '../../interface';
import "./ProductItem.style.scss";

interface IProductItem {
    item: IProduct
    handleChangeImg?: Function
    handleChangeLiveImg?: Function
    handleChangeClickImg?: Function
    handleChangeClickSubImg?: Function
    onClick?: Function | undefined
    onClickHistory?: Function
    handleWishListAdd?: Function | undefined
    isWish?: boolean
    wishID?: number

}

const ProductItem: React.FC<IProductItem> = ({item, onClick, onClickHistory}) => {

    return (
        <div className="rounded d-flex flex-column text-white bg-dark cart justify-content-end"
             onClick={() => (onClick) && onClick()}>
            <div
                className="product___card picbox text-center d-flex justify-content-center align-items-center img-fluid"
                onClick={() => (onClickHistory) && onClickHistory()}>
                <img src={item.img} alt={item.name} className={`${item.name} picture`}/>
                {item.discount && <small
                    className="descount d-flex justify-content-center align-items-center"> %{item.discount}</small>}

            </div>
            <div className="d-flex justify-content-center py-3 px-4 name">
                <strong>{item.name}</strong>

            </div>

            <div className="d-flex justify-content-center pt-3 pb-1 px-4 pricebox">
                {item.discount &&
                <small
                    className="text-decoration-line-through text-muted px-3"> {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}تومان</small>
                }
                {item.discount ? <small
                        className="product___card-price"> {(item.price - (item.price * item.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}تومان</small> :
                    <small
                        className="product___card-price"> {(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}تومان</small>}
            </div>
            <div className="py-3 d-flex justify-content-start px-4 down">
                <p className="m-0" style={{fontSize: "12px"}}>{item.type}</p>
            </div>
        </div>
    )
}

export default ProductItem
