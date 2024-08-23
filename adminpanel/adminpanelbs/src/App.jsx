import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Optional: for additional custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faPalette, faRuler, faFolder, faFolderOpen, faBox, faBook, faShoppingCart, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Collapse from 'react-bootstrap/Collapse';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  }
  return (
    <div className="App">
      {/* Left Sidebar */}
        <div className="sidebar">
          <h4 className="text-center text-gray-400">Sample</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#dashboardMenu" role="button" aria-expanded="false" aria-controls="dashboardMenu">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Dashboard
              </a>
              <div className="collapse" id="dashboardMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Overview</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Stats</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#profileMenu" role="button" aria-expanded="false" aria-controls="profileMenu">
                <FontAwesomeIcon icon={faUser} className="me-2" /> Profile
              </a>
              <div className="collapse" id="profileMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Edit Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Settings</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#colorsMenu" role="button" aria-expanded="false" aria-controls="colorsMenu">
                <FontAwesomeIcon icon={faPalette} className="me-2" /> Colors
              </a>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                
                </button>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant="secondary">
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="collapse" id="colorsMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Primary</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Secondary</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#sizeMenu" role="button" aria-expanded="false" aria-controls="sizeMenu">
                <FontAwesomeIcon icon={faRuler} className="me-2" /> Size
              </a>
              <div className="collapse" id="sizeMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Small</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Large</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#parentCategoryMenu" role="button" aria-expanded="false" aria-controls="parentCategoryMenu">
                <FontAwesomeIcon icon={faFolder} className="me-2" /> Parent Category
              </a>
              <div className="collapse" id="parentCategoryMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Category 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Category 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#subCategoryMenu" role="button" aria-expanded="false" aria-controls="subCategoryMenu">
                <FontAwesomeIcon icon={faFolderOpen} className="me-2" /> Sub Category
              </a>
              <div className="collapse" id="subCategoryMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Sub Category 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Sub Category 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#productMenu" role="button" aria-expanded="false" aria-controls="productMenu">
                <FontAwesomeIcon icon={faBox} className="me-2" /> Product
              </a>
              <div className="collapse" id="productMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Product 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Product 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#storyMenu" role="button" aria-expanded="false" aria-controls="storyMenu">
                <FontAwesomeIcon icon={faBook} className="me-2" /> Story
              </a>
              <div className="collapse" id="storyMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Story 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Story 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#orderMenu" role="button" aria-expanded="false" aria-controls="orderMenu">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Order
              </a>
              <div className="collapse" id="orderMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Order 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Order 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-400" data-bs-toggle="collapse" href="#sliderMenu" role="button" aria-expanded="false" aria-controls="sliderMenu">
                <FontAwesomeIcon icon={faSlidersH} className="me-2" /> Slider
              </a>
              <div className="collapse" id="sliderMenu">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Slider 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-400" href="#">Slider 2</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

              {/* Main Content */}
        <div className="container">
          <h1>Main Content</h1>
          <p>This is the main content area. The sidebar is fixed to the left.</p>
        </div>

        {/* check */}
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h1>This should toogle</h1>

    </div>
  );
}

export default App;

