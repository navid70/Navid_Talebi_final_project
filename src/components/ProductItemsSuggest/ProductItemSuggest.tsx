import React, { useEffect } from "react";
import { products } from "../../Data/Data";
import ProductItem from "../ProductItem/ProductItem";
import { IProduct } from "../../interface";
import { useHistory } from "react-router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./ProductItemSuggest.style.scss";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);
interface IProductSuggest{
  stateSuggest:IProduct[] | undefined
  setStateSuggest:Function
}
const ProductItemSuggest:React.FC<IProductSuggest> = ({stateSuggest,setStateSuggest}) => {
  const history = useHistory()

  return (
    <Swiper
      autoplay={{ delay: 300000, disableOnInteraction: false }}
      spaceBetween={15}
      slidesPerGroup={1}
      navigation={true}
      loop={true}
      loopFillGroupWithBlank={true}
      breakpoints={{
        "340": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "640": {
          slidesPerView: 2,
        },
        "768": {
          slidesPerView: 4,
        },
        "1024": {
          slidesPerView: 4,
        },
      }}
      pagination={false}
      className="mySwiper"
    >
      { (stateSuggest)&& stateSuggest.map((item: IProduct, index: number) => (
        <SwiperSlide key={item.id}>
          <ProductItem
            item={item}
            onClick={()=>history.push(`/category/suggest/${item.id}`)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductItemSuggest;


