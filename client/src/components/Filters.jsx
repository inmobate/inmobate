import styled from "styled-components";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { useGetServicesQuery, useGetTypesQuery } from "../app/api/properties";

const Filters = () => {
  const {
    data: services,
    error: errorServices,
    isLoading: loadingServices,
  } = useGetServicesQuery();

  const {
    data: types,
    error: errorTypes,
    isLoading: loadingTypes,
  } = useGetTypesQuery();

  return (
    <Filter>
      <Swiper
        className="my-swiper"
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={true}
      >
        {services &&
          services?.map((el) => (
            <SwiperSlide key={el.servicio}>
              {el.icono}
              {el.servicio}
            </SwiperSlide>
          ))}
        {types &&
          types?.map((el) => (
            <SwiperSlide key={el.type}>
              {el.icono}
              {el.type}
            </SwiperSlide>
          ))}
      </Swiper>
    </Filter>
  );
};

const Filter = styled.div`
  display: flex;
  justify-content: center;
  background: #ffff;
  overflow: hidden;

  .my-swiper {
    padding: 0 5em;
    position: relative;
    touch-action: pan-y;
    overflow: hidden;
  }

  .swiper-wrapper {
    width: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .swiper-button-prev {
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid #000;
    position: absolute;
    top: 10%;
    left: 20px;
  }

  .swiper-button-next {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #000;
    position: absolute;
    top: 10%;
    right: 20px;
  }
`;

export default Filters;
