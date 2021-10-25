import React, {useEffect} from "react";
import {Row, Col, Container} from "react-bootstrap";
import Skeleton from "@material-ui/lab/Skeleton";
import {
    ProductItem,
    SidebarFilterProduct,
    SidebarFilterSize,
    ProductStored,
    SidebarChidren,
} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory, useRouteMatch} from "react-router";
import {IProduct} from "./../../interface";
import {RootState} from "../../Store/store";
import {products} from "../../Data/Data";
import {BiShoppingBag, BiSearch} from "react-icons/bi";
import {
    handleDataLowestThunk,
    handleDataHighestThunk,
    handleDataHighestDiscountThunk,
    handleDefaultSortThunk,
    handleSearchThunk,
    handleFilterBrandThunk,
    handleFilterSizingThunk,
    handleAllSizingThunk

} from "../../Store/reducers/product.reducer/product.reducer";
import {getCategoryProductThunk} from "../../Store/reducers/product.reducer/product.reducer";
import {
    productChangeClickImg,
    productChangeClickSubImg
} from "../../Store/reducers/product.reducer/product.reducer";
import "./CategoryProducts.style.scss";


function CategoryProducts() {

    let {category_name} = useParams<{ category_name: string }>();
    const {productsCategory, loading, error} = useSelector(
        (state: RootState) => state.reducer.productsItems
    );


    const stateCategory = useSelector(
        (state: RootState) => state.reducer.productsItems
    );
    const dispatch = useDispatch();
    const [direction, setDirection] = React.useState<string>("");

    const [valueSearch, setValueSearch] = React.useState<string>("");
    const [filterd, setFilterd] = React.useState<string>("");
    const [filteredSize, setFilterdSize] = React.useState<string>("")

    const [prouctItems, setProductItems] = React.useState<IProduct[]>()
    const history = useHistory()
    const match = useRouteMatch()
    useEffect(() => {

        setProductItems(products.filter((item) => item.category === category_name))
    }, [category_name])

    useEffect(() => {
        console.log(prouctItems)
        console.log(match);

    }, [prouctItems])


    const handleLowestPrice = () => {
        setDirection("lowest");
    };
    const handleHighestPrice = () => {
        setDirection("highest");
    };
    const handleHighestDiscountPrice = () => {
        setDirection("highestDiscount");
    };
    const handleDefaultSort = () => {
        setDirection("default");
    };

    React.useEffect(() => {
        if (direction === "lowest") {
            dispatch(handleDataLowestThunk(category_name));
        }
        if (direction === "highest") {
            dispatch(handleDataHighestThunk(category_name));
        }
        if (direction === "highestDiscount") {
            dispatch(handleDataHighestDiscountThunk(category_name));
        }
        if (direction === "default") {
            dispatch(handleDefaultSortThunk(category_name));
        }
    }, [direction]);

    const getValueSearch = (e: any) => {
        setValueSearch(e.target.value);
        if (e.target.value === "") {
            dispatch(getCategoryProductThunk(category_name));
        }
    };
    const handleSubmitSearchCategory = (e: any) => {
        e.preventDefault();
        dispatch(
            handleSearchThunk({value: valueSearch, category: category_name})
        );
    };
    const removeFiltered = () => {
        dispatch(handleDefaultSortThunk(category_name))
    }

    const handleChangleSize = (e: React.ChangeEvent) => {
        let selectItem = e.target as HTMLSelectElement;
        setFilterdSize(selectItem.value)
    }

    React.useEffect(() => {
        dispatch(handleFilterBrandThunk({filtered: filterd, category: category_name}))


    }, [filterd]);

    React.useEffect(() => {
        console.log(filteredSize);
        dispatch(handleFilterSizingThunk({filteredSize: filteredSize, category: category_name}))
    }, [filteredSize]);


    React.useEffect(() => {

        if (filteredSize !== "" && filterd !== "") {
            dispatch(handleAllSizingThunk({filtered: filterd, filteredSize: filteredSize, category: category_name}))
        }
        // if(filteredSize === ""){
        //   dispatch(handleAllSizingThunk({filtered:filterd,filteredSize:filteredSize,category:category_name}))
        // }

    }, [filterd, filteredSize])


    // const handleChangeImg = (id: number): void => {
    //   (prouctItems) &&  setProductItems(
    //       prouctItems.map((item: IProduct) =>
    //       item.id === id ? { ...item, img: item.subImg } : item
    //     )
    //   );
    // };
    //
    // const handleChangeLiveImg = (id: number): void => {
    //   setProductItems(products.filter((item)=>item.category ===  category_name))
    // };
    return (
        <>
            <Container>
                {/* <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" بچگانه>>   کاپشن"}</p> */}

                <Row className="d-flex justify-content-between py-4 my-4">
                    <Col lg={2}>
                        <SidebarChidren>
                            <SidebarFilterProduct lable={"Apple"} name={"Apple"}/>
                            <SidebarFilterProduct lable={"َAsuus"} name={"َAsus"}/>
                            <SidebarFilterProduct lable={"Acer"} name={"Acer"}/>
                            <SidebarFilterProduct lable={"Lenovo"} name={"Lenovo"}/>
                            <SidebarFilterProduct lable={"HP"} name={"HP"}/>
                        </SidebarChidren>

                        {
                            (category_name !== "theWatch") &&
                            <SidebarFilterSize/>
                        }
                    </Col>
                    <Col lg={10}>
                        <ProductStored
                            handleSortLowest={() => handleLowestPrice()}
                            handleHighestPrice={() => handleHighestPrice()}
                            handleHighestDiscountPrice={() => handleHighestDiscountPrice()}
                            handleDefaultSort={() => handleDefaultSort()}
                        /> <Row>
                        {
                            (prouctItems) && prouctItems.map((item: IProduct, index: number) => (
                                <Col lg={4} key={item.id} className={'my-3'}>
                                    <ProductItem
                                        item={item}
                                        onClickHistory={() => history.push(`${match.url}/${item.id}`)}
                                        // handleChangeImg={() => handleChangeImg(item.id)}
                                        // handleChangeLiveImg={() => handleChangeLiveImg(item.id)}
                                    />
                                </Col>
                            ))}
                    </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CategoryProducts
