import React from "react";
import {Link} from 'react-router-dom';
import {Container} from "react-bootstrap";
import {links, linksGaming, linksHomee, linksOffice} from "../../routers/menu"
import MenuList from "./MenuList/MenuList";
import "./Menu.style.scss"

const Menu = () => {
    return (
        <Container fluid className="d-flex section-menu mb-4">
            <ul className="d-flex menu justify-content-around mt-3 ">
                <li className="list-unstyled newDress__link ">
                    <Link to="/category/amazing">لپ تاپ</Link>

                    <div className="category__subnew">
                        <ul>
                            <strong>
                                برند
                            </strong>
                            <MenuList data={links}/>
                        </ul>
                    </div>
                </li>
                <li className="list-unstyled male__link ">

                    <Link to="/category/amazing">گیمینگ</Link>


                    <div className="menu-sub__male">
                        <ul>
                            <strong>برند</strong>
                            <MenuList data={linksGaming}/>
                        </ul>
                    </div>
                </li>
                <li className="list-unstyled famale__link">
                    <Link to="/category/amazing">اداری</Link>
                    <div className="menu-sub__female">
                        <ul>
                            <strong>برند</strong>
                            <MenuList data={linksHomee}/>
                        </ul>
                    </div>
                </li>
                <li className="list-unstyled baby__link">
                    <Link to="/category/amazing">خانگی</Link>

                    <div className="baby-sub__female ">
                        <ul>
                            <strong>برند</strong>
                            <MenuList data={linksOffice}/>
                        </ul>
                    </div>
                </li>
            </ul>
        </Container>
    );
};
export default Menu;
