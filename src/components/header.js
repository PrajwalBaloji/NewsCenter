import React, { Component } from "react";
import { Link } from "react-router-dom";
import {BsHouse} from "react-icons/bs"
import {BsFlag} from "react-icons/bs"
import {BsBriefcase} from "react-icons/bs"
import {BsFilm} from "react-icons/bs"
import {FaHeartbeat} from "react-icons/fa"
import {FaRocket} from "react-icons/fa"
import {FaFutbol} from "react-icons/fa"
import {FaSimCard} from "react-icons/fa"
import {FaRandom} from "react-icons/fa"


class Header extends Component {
  render() {
    return (
      <div>
        <div id="Heading" className="bg-danger">
          NewsCenter
        </div>
        <nav id="navbar" className="bg-dark">
          <ul>
            <Link to="/">
              <li className="bg-info m-2 text-center p-1">
                <BsHouse className='m-2'/>
                Home{" "}
              </li>
            </Link>
            <Link to="/TopIndia">
              <li className="bg-info m-2 text-center p-1">
                <BsFlag className='m-2'/>
               India{" "}
              </li>
            </Link>
            <Link to="/Business">
              <li className="bg-info m-2 text-center p-1">
                <BsBriefcase className='m-2'/>
               Business{" "}
              </li>
            </Link>
            <Link to="/Entertainment">
              <li className="bg-info m-2 text-center p-1">
                <BsFilm className='m-2'/>
               Entertainment{" "}
              </li>
            </Link>
            <Link to="/Health">
              <li className="bg-info m-2 text-center p-1">
                <FaHeartbeat className='m-2'/>
               Health{" "}
              </li>
            </Link>
            <Link to="/Science">
              <li className="bg-info m-2 text-center p-1">
                <FaRocket className='m-2'/>
               Science{" "}
              </li>
            </Link>
            <Link to="/Sports">
              <li className="bg-info m-2 text-center p-1">
                <FaFutbol className='m-2'/>
               Sports{" "}
              </li>
            </Link>
            <Link to="/Technology">
              <li className="bg-info m-2 text-center p-1">
                <FaSimCard className='m-2'/>
               Technology{" "}
              </li>
            </Link>
            <Link to="/General">
              <li className="bg-info m-2 text-center p-1">
                <FaRandom className='m-2'/>
               Others{" "}
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
