import React from "react";
import {Modal, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IProduct} from "../../interface"
import "./ProductSinglePage.style.scss"

import {BsFillCartCheckFill} from 'react-icons/all'

interface IProductModalCart {
    show: boolean;
    handleShow: Function;
    handleClose: Function;

}

const ProductModalCart: React.FC<IProductModalCart> = ({show, handleShow, handleClose}) => {
    return (
        <>
            <Modal className="dialog-container" show={show} onHide={() => handleClose()}>
                <Modal.Body className="d-flex justify-content-center flex-column align-items-center">
                    <div className="cart__modal__img mt-3">

                        <BsFillCartCheckFill size={70} color={'#af4bd0'}/>

                    </div>
                    <p className="cart__modal__text mt-4">محصول به سبد خرید شما اضافه شد !</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center mb-5">
                    <button
                        className="cart__modal__btn__cancel d-flex align-items-center justify-content-center"
                        onClick={() => handleClose()}
                    >
                        ادامه دادن خرید
                    </button>
                    <Link to="/cart">
                        <Button className="cart__modal__btn__visibale d-flex align-items-center justify-content-center"
                        >
                            مشاهده سبد خرید
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductModalCart;
