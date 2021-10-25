import React, {useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {Carousel, Category, CountDown, ProductItemCarousel, ProductItemSuggest} from '../../components'
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import {RouteComponentProps} from "react-router";
import {FaArrowLeft, FaPhoneVolume, FaEnvelopeOpenText, FaEnvelope} from "react-icons/fa";
import {IProduct} from '../../interface'
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {FaShippingFast, SiAdguard, FaLaptopCode} from "react-icons/all";
import {RootState} from "../../Store/store";
import CustomHookProductSuggest from "../../components/CustomHookProduct/CustomHookProductSuggest";
import CustomHookProductAmazing from "../../components/CustomHookProduct/CustomHookProductAmazing";
import {ToastContainer, toast} from "react-toastify";
import {Spinner} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.style.scss";
import axios from "axios";
import {products} from "../../Data/Data";

interface IHomePage extends RouteComponentProps {
}

const HomePage: React.FC<IHomePage> = () => {
    const [stateAmazing, setStateAmazing, loading, error] = CustomHookProductAmazing("api/products?category=amazing")
    const [stateSuggest, setStateSuggest, pending, err] = CustomHookProductSuggest("api/products?category=suggest")
    const {isLogin, username} = useSelector((state: RootState) => state.reducer.auth)
    const history = useHistory()

    useEffect(() => {
        setStateAmazing(products.filter((item) => item.category === "amazing"))
        setStateSuggest(products.filter((item) => item.category === "suggest"))

    }, [])


    return (
        <>
            <ToastContainer/>
            <Carousel/>
            <Container className="py-5">

                <section className="section__amazing text-white pb-5">
                    <Row className="pt-1 pb-0">

                        <Col lg={6}>
                            <h3 className="section__amazing-title d-flex justify-content-center justify-content-lg-start py-3 py-lg-0">تخفیف
                                های امروز</h3>
                        </Col>
                        <Col lg={6}>
                          <span className="d-flex justify-content-between align-items-center ">
                           <p className="m-0 section__amazing-timer">زمان باقی مانده تا ‍ پایان پیشنهادات</p>
                           <CountDown timeCustom={110000}/>
                          </span>
                        </Col>
                    </Row>

                    <Row className="pt-5 pb-2">
                        <Col>
                            <ProductItemCarousel
                                stateAmazing={stateAmazing}
                                setStateAmazing={setStateAmazing}

                            />
                        </Col>
                    </Row>
                    <div className="section-show-all__amazing d-flex pt-3 justify-content-center">
                        <button onClick={() => history.push("/category/amazing")}>مشاهده همه</button>
                    </div>
                </section>

                <section className="main__products my-5">
                    <Row>
                        <Col md={6} className="p-0 ps-0  ps-md-2  d-flex pb-3">
                            <CategoryProduct
                                srcImg="https://i0.wp.com/www.roassoc.com/wp-content/uploads/2020/03/laptop.png?resize=710%2C410&ssl=1"
                                alt={'لپ تاپ معمولی'}
                                href={"/category/amazing"}
                            />
                        </Col>
                        <Col md={6} className="p-0 pe-0  pe-md-2  d-flex  pb-3">
                            <CategoryProduct
                                srcImg="https://www.daily-sun.com/assets/news_images/2021/06/16/DS-4-16-06-2021.jpg"
                                alt={'لپ تاپ گیمینگ'}
                                href={"/category/amazing"}
                            />
                        </Col>
                    </Row>
                </section>


                <section className="section__suggest">
                    <Row className="pt-5 pb-2 text-white">

                        <Col lg={12} className="pb-4">
                            <h3 className="section__amazing-title d-flex justify-content-center justify-content-lg-start py-3 py-lg-0 text-white"> بیشنهادهای
                                امروز</h3>
                        </Col>

                        <Col>
                            <ProductItemSuggest
                                stateSuggest={stateSuggest}
                                setStateSuggest={setStateSuggest}
                            />
                        </Col>
                    </Row>
                </section>

                <section className="section__category-products py-5">
                    <Row>
                        <Col md={6} className="p-0 ps-0  ps-md-2  d-flex pb-3">
                            <CategoryProduct
                                srcImg="https://harborgenesiscc.org/wp-content/uploads/2019/08/back-to-school.jpg"
                                alt={'لپ تاپ معمولی'}
                                href={"/category/amazing"}
                            />
                        </Col>
                        <Col md={6} className="p-0 pe-0  pe-md-2  d-flex  pb-3">
                            <CategoryProduct
                                srcImg="https://www.barbarabuchholz.com/wp-content/uploads/2020/07/multitasks-barbarabuchholz.jpg"
                                alt={'لپ تاپ گیمینگ'}
                                href={"/category/amazing"}
                            />
                        </Col>
                    </Row>
                </section>

                <section className="section__guarantee py-5">
                    <Row>
                        <Col md={4}>
                            <div className="d-flex servises justify-content-center flex-column align-items-center my-3">
                                <FaShippingFast className='logo' size={'70'}/>
                                <p className="pt-3">ارسال سریع و رایگان</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div
                                className="d-flex servises  justify-content-center flex-column align-items-center my-3">
                                <FaLaptopCode className='logo' size={'70'}/>
                                <p className="pt-3">ضمانت اصالت</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="d-flex servises justify-content-center flex-column align-items-center my-3">
                                <SiAdguard className='logo' size={'70'}/>
                                <p className="pt-3">خدمات پس از فروش</p>

                            </div>
                        </Col>


                    </Row>
                </section>

            </Container>
        </>
    )
}

export default HomePage
