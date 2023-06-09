import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BsMicFill } from 'react-icons/bs';
import { updateTitle } from '../redux/Title/titleReducer';
import './Header.css';

const Header = () => {
  // Initialize variables and hooks.
  const dispatch = useDispatch();
  const location = useLocation();
  const { title } = useSelector((state) => state.title);
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  // Update the title of the header based on the current page.
  useEffect(() => {
    let newHeading = '';

    switch (location.pathname) {
      case '/':
        newHeading = 'World Metrics';
        break;
      case '/continent':
        newHeading = 'Continent Details';
        break;
      case '/country':
        newHeading = 'Country Details';
        break;
      default:
        newHeading = 'Page Not Found';
        break;
    }

    dispatch(updateTitle(newHeading));
  }, [location, dispatch]);

  return (
    <header className="header" data-testid="header">
      <div className="nav-left">
        <IoIosArrowBack className="nav-icon" onClick={() => navigate(-1)} />
        <h2 className="year" data-testid="year">{year}</h2>
      </div>
      <h1 className="title">{title}</h1>
      <div className="nav-right">
        <BsMicFill className="nav-icon icon-mic" />
        <IoIosSettings className="nav-icon" />
      </div>
    </header>
  );
};

export default Header;
