/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    let element = document.getElementById('resizable');
    setElement(element);
  }, []);

  useEffect(() => {
    if (element) {
      let resizer = document.createElement('div');
      resizer.className = 'draghandle';
      resizer.style.width = '6px';
      resizer.style.height = '100vh';
      element.appendChild(resizer);
      resizer.addEventListener('mousedown', initResize, false);
    }
  }, [element]);

  const initResize = (e) => {
    element.style.transition = 'width 0ms cubic-bezier(0.2, 0, 0, 1) 0s';
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
  };

  const Resize = (e) => {
    element.style.width = e.clientX - element.offsetLeft + 'px';
  };

  const stopResize = (e) => {
    element.style.transition = 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s';
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
  };

  const myFunc = (e) => {
    e.preventDefault();
    let width = document.getElementsByClassName('css-sidebar-container')[0]
      .style.width;
    if (width === '276px') {
      document.getElementsByClassName('css-sidebar-container')[0].style.width =
        '20px';
      document.getElementsByClassName(
        'ak-navigation-resize-button'
      )[0].style.opacity = 1;
      document
        .querySelector('#btn-nav > span > svg > path')
        .setAttribute(
          'd',
          'M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z'
        );
    } else {
      document.getElementsByClassName('css-sidebar-container')[0].style.width =
        '276px';
      document
        .querySelector('#btn-nav > span > svg > path')
        .setAttribute(
          'd',
          'M13.706 9.698a.988.988 0 0 0 0-1.407 1.01 1.01 0 0 0-1.419 0l-2.965 2.94a1.09 1.09 0 0 0 0 1.548l2.955 2.93a1.01 1.01 0 0 0 1.42 0 .988.988 0 0 0 0-1.407l-2.318-2.297 2.327-2.307z'
        );
      setTimeout(() => {
        document.getElementsByClassName(
          'ak-navigation-resize-button'
        )[0].style.opacity = 0;
      }, 1000);
    }
    document
      .getElementsByClassName('css-resize-wrapper')[0]
      .addEventListener('mouseover', mouseOver);
    document
      .getElementsByClassName('css-resize-wrapper')[0]
      .addEventListener('mouseout', mouseOut);

    function mouseOver(e) {
      document.getElementsByClassName(
        'ak-navigation-resize-button'
      )[0].style.opacity = 1;
    }

    function mouseOut(e) {
      document.getElementsByClassName(
        'ak-navigation-resize-button'
      )[0].style.opacity = 1;
      window.addEventListener('mouseover', mouseOver, false);
      window.addEventListener('mouseout', mouseOut, false);
    }
  };

  return (
    <div className="css-sidebar-wrapper">
      <div className="css-sidebar">
        <div
          id="resizable"
          className="css-sidebar-container"
          style={{
            willChange: 'width',
            width: '276px',
            transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s',
          }}
        >
          <div className="css-item-wrapper">
            <div className="css-item-container">
              <div className="css-item">
                <a href="#" className="css-item-a">
                  <div className="css-item-icon">
                    <span className="css-icon icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        focusable="false"
                        role="presentation"
                      >
                        <path
                          d="M6 2h10a3 3 0 0 1 0 6H6a3 3 0 1 1 0-6zm0 2a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H6zm4 5h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6zm0 2a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8zm-4 5h6a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H6z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="css-title">Roadmap</div>
                </a>
              </div>
              <div className="css-item">
                <a href="#" className="css-item-a-active">
                  <div className="css-item-icon-active">
                    <span className="css-icon icon" role="presentation">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        focusable="false"
                        role="presentation"
                      >
                        <g fill="currentColor">
                          <path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0 1 20.01 20H3.99A1.994 1.994 0 0 1 2 18.006V5.994z"></path>
                          <path d="M8 6v12h2V6zm6 0v12h2V6z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="css-title title-active">Board</div>
                </a>
              </div>
              <div className="css-item">
                <a href="#" className="css-item-a">
                  <div className="css-item-icon">
                    <span className="css-icon icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        focusable="false"
                        role="presentation"
                      >
                        <g fill="currentColor" fill-rule="evenodd">
                          <rect x="8" y="6" width="8" height="2" rx="1"></rect>
                          <rect x="8" y="9" width="8" height="2" rx="1"></rect>
                          <rect x="8" y="12" width="4" height="2" rx="1"></rect>
                          <path
                            d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 0 1 5 20.01V3.99z"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="css-title">Pages</div>
                </a>
              </div>
              <div className="css-item">
                <a href="#" className="css-item-a">
                  <div className="css-item-icon">
                    <span className="css-icon icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        focusable="false"
                        role="presentation"
                      >
                        <g fill="currentColor" fill-rule="evenodd">
                          <path
                            d="M16.002 3H4.995A1.995 1.995 0 0 0 3 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0 0 21 19.005V7.998 11h-2v8H5V5h8V3h3.002z"
                            fill-rule="nonzero"
                          ></path>
                          <path d="M19 5V3.99A1 1 0 0 0 18 3c-.556 0-1 .444-1 .99V5h-1a1 1 0 0 0 0 2h1v1.01A1 1 0 0 0 18 9c.556 0 1-.444 1-.99V7h1a1 1 0 0 0 0-2h-1z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="css-title">Add item</div>
                </a>
              </div>
              <div className="css-item">
                <a href="#" className="css-item-a">
                  <div className="css-item-icon">
                    <span className="css-icon icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        focusable="false"
                        role="presentation"
                      >
                        <path
                          d="M11.701 16.7a5.002 5.002 0 1 1 0-10.003 5.002 5.002 0 0 1 0 10.004m8.368-3.117a1.995 1.995 0 0 1-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 0 0 .315-.574 8.947 8.947 0 0 0-.836-1.993.477.477 0 0 0-.598-.195 2.04 2.04 0 0 1-1.29.08 1.988 1.988 0 0 1-1.404-1.395 2.04 2.04 0 0 1 .076-1.297.478.478 0 0 0-.196-.597 8.98 8.98 0 0 0-1.975-.826.479.479 0 0 0-.574.314 1.995 1.995 0 0 1-1.885 1.346 1.994 1.994 0 0 1-1.884-1.345.482.482 0 0 0-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 0 0-.198.582A2.002 2.002 0 0 1 4.445 7.06a.478.478 0 0 0-.595.196 8.946 8.946 0 0 0-.833 1.994.48.48 0 0 0 .308.572 1.995 1.995 0 0 1 1.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 0 0-.308.57 8.99 8.99 0 0 0 .723 1.79.477.477 0 0 0 .624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 0 0 .168.628 8.946 8.946 0 0 0 2.11.897.474.474 0 0 0 .57-.313 1.995 1.995 0 0 1 1.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 0 0 .57.313 8.964 8.964 0 0 0 2.084-.883.473.473 0 0 0 .167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 0 0 .628-.19 8.925 8.925 0 0 0 .728-1.793.478.478 0 0 0-.314-.573"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="css-title">Project settings</div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="draghandle"
            style={{ width: '6px', height: '100vh' }}
          ></div>
        </div>
      </div>
      <div className="css-resize-wrapper">
        <button
          className="ak-navigation-resize-button resize-button"
          type="button"
          aria-expanded="true"
          id="btn-nav"
          onClick={myFunc}
        >
          <span className="btn-span">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              role="presentation"
            >
              <path
                d="M13.706 9.698a.988.988 0 0 0 0-1.407 1.01 1.01 0 0 0-1.419 0l-2.965 2.94a1.09 1.09 0 0 0 0 1.548l2.955 2.93a1.01 1.01 0 0 0 1.42 0 .988.988 0 0 0 0-1.407l-2.318-2.297 2.327-2.307z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
