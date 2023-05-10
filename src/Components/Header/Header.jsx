import React, { useState,useEffect,useHistory } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [items, setItems] = useState([
      { id: 0, title: "Home", active: true },
      { id: 1, title: "About-me", active: false },
      { id: 2, title: "Contact", active: false },
      { id: 3, title: "Resume", active: false },
    ]);
  
    useEffect(() => {
      const activeItemId = localStorage.getItem("activeItemId");
      if (activeItemId !== null) {
        const updatedItems = items.map((item) => ({
          ...item,
          active: item.id === parseInt(activeItemId),
        }));
        setItems(updatedItems);
      }
    }, []);
  
    const handleItemClick = (clickedItemId) => {
      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.id === clickedItemId) {
            return { ...item, active: true };
          } else if (item.active) {
            return { ...item, active: false };
          } else {
            return item;
          }
        });
        localStorage.setItem("activeItemId", clickedItemId);
        return updatedItems;
      });
    };
  
    return (
      <div className="header">
        <nav>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className={item.active ? "active" : ""}
                onClick={() => handleItemClick(item.id)}
              >
                <Link to={item.id === 0 ? "/" : `/${item.title.toLowerCase()}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;