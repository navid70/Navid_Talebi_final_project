import React from "react";
import {Container} from "react-bootstrap";
import "./Footer.style.scss"
import {AiFillInstagram, AiFillTwitterCircle, FaTelegram} from "react-icons/all";

const Footer = () => {
    return (
        <footer className="footer pt-5 text-white">
            <Container>
                <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between pb-5">
                    <div className="section-footer mb-4">
                        <p>خدمات مشتریان</p>
                        <ul>
                            <li>
                                {" "}
                                <li> پرسش های متداول</li>
                            </li>
                            <li>
                                {" "}
                                <p>شرایط گارانتی</p>
                            </li>
                            <li>
                                {" "}
                                <p>نحوه خرید</p>
                            </li>
                        </ul>
                    </div>
                    <div className="section-footer mt-4">
                        <p>اطلاعات فروشگاه</p>
                        <ul>
                            <li>
                                {" "}
                                <li>درباره ما</li>
                            </li>
                        </ul>
                    </div>


                    <div className="brand-footer">
                        <p>با ما در ارتباط باشید</p>

                        <div className="brand-footer-social py-4">
                            <AiFillTwitterCircle size={50}/>
                            <FaTelegram size={45}/>
                            <AiFillInstagram size={55}/>
                        </div>
                    </div>


                </div>
            </Container>
            <div className='d-flex justify-content-center align-items-center foot bg-dark'><small>توسعه داده شده توسط
                نوید طالبی</small></div>

        </footer>
    );
};

export default Footer;
