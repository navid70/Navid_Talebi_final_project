import React from "react";
import {Tabs, Tab, Table, Card, Button} from "react-bootstrap";
import "./ProductSinglePage.style.scss";
import {BiUpvote} from 'react-icons/all'

const ProductSingleTabs = () => {
    const [key, setKey] = React.useState<any>("home");
    return (
        <div className="tab-single my-5 lists-tabs">
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 d-flex justify-content-start"
                style={{margin: 0, padding: 0}}
                onSelect={(k) => setKey(k)}
                activeKey={key}
            >
                <Tab eventKey="home" title="مشخصات" className="py-4 px-3 bg-dark listt">
                    <ul>
                        <li>
                            <span>وزن: </span> <small>2 kg</small>
                        </li>
                        <li>
                            <span>پردازنده:</span> <small>Intel core i7 10850H</small>
                        </li>
                        <li>
                            <span>گرافیک:</span> <small>RTX 3060</small>
                        </li>
                        <li>
                            <span>حافظه رم:</span> <small>16 GB</small>
                        </li>
                    </ul>
                </Tab>
                <Tab eventKey="نظرات کاربران" title="نظرات کاربران" className="py-4 px-3 bg-dark">
                    <div>
                        <Card bg={"dark"}>
                            <Card.Header as="h5">عباس بوعزار</Card.Header>
                            <Card.Body>
                                <Card.Title>عالی</Card.Title>
                                <div className={'py-4'}>
                                    <Card.Text>
                                        <p>لپ تاپ خوبیه </p>
                                    </Card.Text>
                                </div>
                                <Button variant="danger"><small>نظر مفید بود <BiUpvote/></small></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default ProductSingleTabs;
