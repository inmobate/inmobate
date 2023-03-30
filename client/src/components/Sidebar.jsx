import React from "react";
import styled from "styled-components";
import { variables } from "../components/ItemSidebar";
import {
  AiOutlineArrowsAlt,
  AiFillHome,
  AiOutlineForm,
  AiFillCalendar,
  AiOutlineMenu
} from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
export default function Sidebar({ sidebarOpen, setsidebarOpen }) {
  const open = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <Container isOpen={sidebarOpen}>
      <button className="Sidebarbutton" onClick={open}>
        <AiOutlineArrowsAlt />
      </button>
      <div className="LogoInmobate">
        <div className="imgcontent">
          <AiOutlineMenu/>
        </div>
      </div>
      {linksArray.map(({icon, label, to}) => (
        <div className="LinkContainer" key ={label}>
          <Link to={to} className ="Links">
            <div className="Linkicon">
              {icon}
            </div>
            {sidebarOpen &&(
              <span>{label}</span>
            )
            }
          </Link>
        </div>
      ))}
    </Container>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <AiFillHome />,
    to: "/home",
  },
  {
    label: "Users",
    icon: <ImStatsBars />,
    to: "/home",
  },
  {
    label: "Form",
    icon: <AiOutlineForm />,
    to: "/addproperty",
  },
  {
    label: "Imformation",
    icon: <AiFillCalendar />,
    to: "/profile",
  }, {
    label: "Coments",
    icon: <AiFillHome />,
    to: "/home",
  },
];

//////////////////styledcomponents//////////////
const Container = styled.div`

  position: sticky;
  padding-top: 20px;
  .Sidebarbutton {
    border: none;
    position: absolute;
    top: ${variables.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
  }
  .LogoInmobate {
    display: flex;
    align-items: center;
    padding-bottom: ${variables.lgSpacing};
    .imgcotent {
      /* h1{display:flex;
  height:auto;
} */
      cursor: pointer;
      transition: all 0.3s;
      transition: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
    }
  }
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;

  }.Links{
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:calc(${variables.smSpacing}-2px) 0;
    .Linkicon{
      padding:${variables.smSpacing} ${variables.mdSpacing};
      display:flex;
      svg{
        font-size:25px;
      }
    }
  }
`;