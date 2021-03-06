import React from "react";
import {Container, Col, Row, Button, Table} from "react-bootstrap";
import Skeleton from '@material-ui/lab/Skeleton';
import {BiShoppingBag} from "react-icons/bi";
import {useParams} from "react-router";
import {products} from "../../Data/Data";
import {IProduct} from "../../interface";
import {FaRuler} from "react-icons/fa";
import {BiHeart} from "react-icons/bi";
import {ProductSingleTabs} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {changeImgProduct, changeSubImgProduct} from "../../Store/reducers/produtSingle.reducer/productSingle.reducer";
import {RootState} from "../../Store/store";
import {getProductSingleThunk} from "../../Store/reducers/produtSingle.reducer/productSingle.reducer";
import {addToCart, updateCart, updateTotalCart} from "../../Store/reducers/product.reducer/product.reducer";
import ProductModalCart from "./ProductModalCart";

import "./ProductSinglePage.style.scss";

const ProductSinglePage = () => {
    let {id, category_name} = useParams<{ id: string, category_name: string }>();
    const [modalShow, setModalShow] = React.useState(false);
    const [productImg, setProductImg] = React.useState<IProduct>();
    // modal cart state
    const [show, setShow] = React.useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// add To cart
    const cart = useSelector((state: RootState) => state.reducer.productsItems.cart)
    const {loading, error} = useSelector((state: RootState) => state.reducer.productItem);

    const dispatch = useDispatch()
    const [product, setProduct] = React.useState<IProduct>();
    React.useEffect(() => {
        setProduct(products.find((item) => item.id === +id));
        setProductImg(products.find((item) => item.id === +id));
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            if (!cart.some((item) => item.id === product.id) || !cart.some((item) => item.manufacturer === product.manufacturer)) {
                dispatch(addToCart({
                    ...product,
                    count: 1,
                    totalPrice: (product.discount) ? product.price - (product.price * product.discount) / 100 : product.price
                }))
            }
        }

    }
    const handleUpdateAddToCart = () => {
        if (product) {
            console.log(cart.some((item) => item.id === product.id));
            if (cart.some((item) => item.id === product.id) && cart.some((item) => item.manufacturer === product.manufacturer)) {
                dispatch(updateCart(product.id))
                dispatch(updateTotalCart(product.id))
            }
        }

    }


    React.useEffect(() => {
        setProductImg(products.find((item) => item.id === +id));
        dispatch(getProductSingleThunk({id: id, category_name: category_name}))
    }, [id]);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleChangeImg = (src: string) => {
        // if (src === "img") {
        //     (productImg) && dispatch(changeImgProduct(productImg.img))
        // } else {
        //     (productImg) && dispatch(changeSubImgProduct(productImg.subImg))
        // }
        if (src === "img") {
            (productImg) && setProduct({...productImg, img: productImg!.img})
        } else {

            (productImg) && setProduct({...productImg, img: productImg!.subImg})
        }
    }


    return (

        <>

            <Container className='text-white'>
                {
                    (loading) ?
                        <div className="my-5">
                            <Row>
                                <Col lg={6}>
                                    <Skeleton animation="wave" variant="circle" width={40} height={40}/>
                                    <Skeleton animation="wave" height={10} width="80%" style={{marginBottom: 6}}/>
                                    <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                    <Skeleton animation="wave" height={10} width="80%"/>
                                    <Skeleton animation="wave" variant="rect" style={{height: "480px"}}/>
                                </Col>
                                <Col lg={6}>
                                    <Skeleton animation="wave" variant="circle" width={40} height={40}/>
                                    <Skeleton animation="wave" height={10} width="80%" style={{marginBottom: 6}}/>
                                    <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                    <Skeleton animation="wave" height={10} width="80%"/>
                                    <Skeleton animation="wave" variant="rect" style={{height: "480px"}}/>
                                </Col>
                            </Row>


                        </div>
                        :
                        <Row className="py-4">
                            <Col lg={4} className={"product"}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img loading="lazy" src={product?.img} alt={product?.name}/>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="product-arrowImg ms-3" onClick={() => handleChangeImg("img")}>
                                        <img src={productImg?.img} alt={productImg?.type}/>
                                    </div>
                                    <div className="product-arrowImg" onClick={() => handleChangeImg("subImg")}>
                                        <img src={productImg?.subImg} alt={productImg?.type}/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="pt-4 px-3">
                                <div>
                                    <h4>{product?.name}</h4>
                                    <p className="my-3">{product?.type}</p>
                                    <span className="d-flex align-items-center my-4">
              <small
                  className={
                      product?.discount
                          ? "text-decoration-line-through ms-4 discount "
                          : ` ms-4 discount`
                  }
              >
                {product?.price} ??????????
              </small>
              <p className="discount-value d-flex align-items-center m-0">
                ?????????? ??????:{" "}
                  <p className="discount-price m-0 me-3 ">
                  {product?.discount
                      ? ((product?.price * product?.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : 0}{" "}
                      ??????????
                </p>
              </p>
            </span>
                                    {product?.discount ? (
                                        <h4 className="price mb-5">
                                            {(product.price - (product?.price * product?.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                            ??????????
                                        </h4>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="d-flex py-5">
                                    <select
                                        name="selectSize"
                                        className="single-select bg-light"
                                        placeholder="??????????????"
                                    >
                                        <option value="30">???????? ??????????????</option>
                                        <option value="31">?????????????? 6 ????????</option>
                                        <option value="31">?????????????? 12 ????????</option>
                                    </select>

                                </div>
                                <button className="basket my-4" onClick={() => {
                                    handleShow();
                                    handleAddToCart();
                                    handleUpdateAddToCart()
                                }}>
                                    <BiShoppingBag size={25}/>
                                    <span className="me-2"> ???????????? ???? ?????? ????????</span>
                                </button>
                            </Col>

                            <Col lg={12}>
                                <ProductSingleTabs/>
                            </Col>
                        </Row>
                }

                <ProductModalCart
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                />

            </Container>

        </>
    );
};


export default ProductSinglePage;
