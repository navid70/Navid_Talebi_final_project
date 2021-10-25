import React from 'react'
import {BiSearch} from "react-icons/bi";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa";
import "./CategoryProductsMobile.style.scss"

const CategoryProductMobile = () => {
    console.log("yes")
    return (
        <>
            <Container>

                <div className="category__mobile">
                    <form className="d-flex">
                        <input type="text" className="input-category__mobile" placeholder="جستجو ..."/>
                        <BiSearch size={30} className="search-icon"/>
                    </form>
                </div>
                <section className={' text-white'}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="my-4">دسته بندی</h6>
                        <FaArrowLeft/>
                    </div>
                    <Row>
                        <Col xs={6} className="my-2">
                            <div className="category__mobile__link">
                                <Link to="/category/amazing">
                                    <small>جدیدترین ها</small>

                                    <img src="https://m.media-amazon.com/images/I/41vr2SeuNqS._AC_.jpg"
                                         alt="جدیدترین ها"/>
                                </Link>

                            </div>
                        </Col>
                        <Col xs={6} className="my-2">
                            <div className="category__mobile__link">
                                <Link to="/category/amazing">
                                    <small> گیمینگ</small>
                                    <img src="https://m.media-amazon.com/images/I/416DGpM5lcL._AC_AC_SY350_QL15_.jpg"
                                         alt="گیمینگ"/>

                                </Link>
                            </div>
                        </Col>
                        <Col xs={6} className="my-2">
                            <div className="category__mobile__link">
                                <Link to="/category/amazing">

                                    <small> اداری</small>
                                    <img src="https://m.media-amazon.com/images/I/41q-I1n5egL._AC_.jpg" alt="اداری"/>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={6} className="my-2">
                            <div className="category__mobile__link">
                                <Link to="/category/amazing">
                                    <small> خانگی</small>
                                    <img src="https://m.media-amazon.com/images/I/31IIrujiNZL._AC_SY350_.jpg"
                                         alt="خانگی"/>

                                </Link>
                            </div>
                        </Col>
                    </Row>
                </section>

            </Container>


        </>

    )
}

export default CategoryProductMobile
