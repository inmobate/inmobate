import styled from "styled-components";

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";

import { useGetPropertiesIdQuery } from "../app/api/propertiesId";

import Navbar from "../components/Navbar";

import Footerbar from "../components/Footerbar";

const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPropertiesIdQuery(id);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <div>Habitación de hotel en AAR</div>
        <div>
          <div>⭐️⭐️⭐️⭐️</div>
          <div>Pichincha, Ecuador</div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-48287927/original/ecae28bb-ac88-4f3d-83cd-96ba6c50c997.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/073089b8-d783-47df-bcda-e636bdb0d0a9.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/00c22a7a-e160-47df-8432-c83d2c3675e3.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/4ffbd84b-4741-44cc-905b-47ca193da6ca.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/e2cc2fa4-caed-46c3-b787-3911e7c77b4f.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/2124c6c2-239a-454d-9445-1d8d4f010757.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/a122ba99-0100-4fea-bee6-2023f862eee2.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/41f5d314-658b-4495-a9e5-3cfb55c50542.jpeg"
              alt=""
              width="300px"
            />
          </SwiperSlide>
        </Swiper>

        <div>
          <div>House</div>
          <div>Habitacion:5</div>
          <div>Baños: 1</div>
        </div>
      </Main>

      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;

export default Detail;
