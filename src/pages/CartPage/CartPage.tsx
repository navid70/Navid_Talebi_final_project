import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Store/store';

import {
    updateCountCard,
    updateCountMinusCard,
    checkCountCart,
    removeProductCard,
    updateTotalCart
} from "../../Store/reducers/product.reducer/product.reducer"
import CartPageModalRemove from './CartPageModalRemove';
import {IProduct} from '../../interface';
import {BsCartX, BsXCircle} from "react-icons/bs";
import "./CartPage.style.scss"
import {BiShoppingBag} from "react-icons/bi";

const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.reducer.productsItems.cart)
    const [modalShow, setModalShow] = React.useState(false);
    const [productID, setProductID] = React.useState<number>(0)
    const [totalPriceCart, setTotalCartPrice] = React.useState<any>();
    const cartIncrement = (id: number) => {
        dispatch(updateCountCard(id));
        dispatch(updateTotalCart(id));
    }

    const cartDeceremnt = (id: number) => {
        dispatch(updateCountMinusCard(id));
        dispatch(updateTotalCart(id));

    }
    const checkCountZero = (id: number) => {
        const product = cart.find((item) => item.id === id);
        if (product?.count === 1) {
            setModalShow(true)
            dispatch(checkCountCart(id))
            dispatch(updateTotalCart(id));
            setProductID(id)
        }
    }
    const handleRemoveProduct = () => {
        dispatch(removeProductCard(productID));

        setModalShow(false)
    }
    const handleShowModalIcon = (id: number) => {
        setModalShow(true)
        setProductID(id)
    }

    React.useEffect(() => {
        setTotalCartPrice(cart.reduce((prev, current: any) => prev + current.totalPrice, 0))
    }, [cart])
    if (cart.length === 0) {
        return (
            <div style={{margin: "100px 0"}}
                 className="d-flex  flex-column justify-content-center align-items-center text-white">
                <BsCartX size={100}/>
                <p className="my-4">سبد خرید شما خالی است</p>
            </div>
        )
    }
    return (
        <>
            <Container className="my-5">

                <div className="cart__thead d-flex justify-content-center justify-content-lg-between">
                    <div>
                        <span>سبد خرید شما</span>
                    </div>
                    <div className="cart__thead__left  d-none d-lg-flex justify-content-around ">
                        <span>قیمت واحد</span>
                        <span>تعداد</span>
                        <span>قیمت نهایی</span>
                    </div>
                </div>

                {
                    cart.map((item: IProduct, index: number) => (

                        <div key={item.id} className="card__product my-4">
                            <Row>
                                <Col lg={5}>
                                    <div className="d-flex">
                                        <div className="card__product__img">
                                            <BsXCircle onClick={() => handleShowModalIcon(item.id)} size={23}
                                                       className="card__product__btn__remove"/>
                                            <img src={item.img} alt={item.type}/>
                                        </div>
                                        <div
                                            className="card__product__desc d-flex flex-column justify-content-evenly pe-4 text-white">
                                            <strong>{item.name} </strong>
                                            <span>{item.type}</span>
                                            <span
                                                className="card__product__desc__size">سازنده: {item.manufacturer}</span>
                                        </div>

                                    </div>
                                </Col>
                                <Col lg={7}>
                                    <Row>
                                        <Col lg={5}>
                                            <div
                                                className="card__product__price  d-flex flex-column align-items-center justify-content-center">
                                                {
                                                    (item.discount) ?
                                                        <span
                                                            className="text-decoration-line-through d-flex justify-content-center"
                                                            style={{color: "#8b8b8b"}}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
                                                        :
                                                        <span
                                                            className="d-flex justify-content-center align-items-center"
                                                            style={{color: "#8b8b8b"}}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
                                                }
                                                {
                                                    (item.discount) ?
                                                        <div
                                                            className="d-flex w-100 justify-content-around align-items-center mt-4">
                                                            <small className="card__product__price__text"><small
                                                                className="card__product__price__discount">{item.discount}%</small> تخفیف
                                                            </small>
                                                            <small
                                                                className="card__product__price__text tes">{(item.discount) && (item.price - (item.price * item.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</small>
                                                        </div>
                                                        :
                                                        null
                                                }

                                            </div>
                                        </Col>
                                        <Col lg={3} className="d-flex justify-content-center justify-content-lg-start">
                                            <div className="d-flex justify-content-evenly align-items-center">
                                                <button className="card__product__deceremnt"
                                                        onClick={() => cartIncrement(item.id)}><img
                                                    src="https://www.banimode.com/themes/new/assets/images/icon/add.svg"
                                                    alt=""/></button>
                                                <input className="px-3 card__product__count" type="text"
                                                       value={item.count}/>
                                                <button className="card__product__increment" onClick={() => {
                                                    cartDeceremnt(item.id);
                                                    checkCountZero(item.id)
                                                }}><img
                                                    src="	https://www.banimode.com/themes/new/assets/images/icon/minus.svg"
                                                    alt=""/></button>
                                            </div>
                                        </Col>
                                        <Col lg={4} className="d-flex align-items-center justify-content-center">
                                            {
                                                (item.discount) ?
                                                    <div
                                                        className="d-flex justify-content-center justify-content-lg-start  align-items-center card__product__price ms-0 ms-lg-5">{(item.totalPrice == 0) ? (item.price - (item.price * item.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : item.totalPrice}<small>تومان</small>
                                                    </div>

                                                    :
                                                    <div
                                                        className="d-flex justify-content-center justify-content-lg-start  align-items-center card__product__price ms-0 ms-lg-5">{(item.totalPrice === 0) ? item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : item.totalPrice} تومان</div>
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>

                    ))
                }


                <div className="card__total">
                    <Row>
                        <Col lg={8} className="d-flex justify-content-center align-items-center py-4 py-lg-0">
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex justify-content-between card__total__pay">
                                <span> قیمت قابل پرداخت: </span>
                                <span>{totalPriceCart} <small>تومان</small></span>
                            </div>
                        </Col>

                    </Row>

                </div>

                <Row className="my-5 text-white">
                    <Col lg={6}>
                        <p className="regist__text">
                            <span> {" "}افزودن کالا به سبد خرید به معنی رزرو آن نیست</span>
                            {" "}
                            با توجه به محدودیت موجودی سبد خود را ثبت و خرید را تکمیل کنید .
                        </p>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center justify-content-lg-end pb-5 pb-lg-0">
                        <button className="regist__buy__btn">
                            ثبت خرید
                        </button>
                    </Col>
                </Row>
            </Container>


            <CartPageModalRemove
                show={modalShow}
                onHide={() => setModalShow(false)}
                onClick={() => handleRemoveProduct()}
            />
        </>
    )
}


export default CartPage;