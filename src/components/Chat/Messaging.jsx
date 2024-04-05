import React, { useEffect, useState } from "react";
import classes from "./Messaging.module.css";

const Contact = ({ name, img, lastMessage, isActive }) => {
  return (
    <div
      style={{ backgroundColor: isActive && "#28282D" }}
      className={classes.contactCover}
    >
      <div className={classes.contact}>
        <div className={classes.imgInfo}>
          <div className={classes.img}>
            <img src={img} alt="" />
          </div>
          <div className={classes.info}>
            <h1>{name}</h1>
            <p>{lastMessage}</p>
          </div>
        </div>

        {isActive && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
          >
            <circle cx="4" cy="4.5" r="4" fill="#FF0000" />
          </svg>
        )}
      </div>
    </div>
  );
};

const Messaging = () => {
  const [search, setSearch] = useState("");
  const contacts = [
    {
      name: "Aaryan Ghulane",
      lastMessage: "Hey, how are you?",
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      isActive: true,
      id: 1,
    },
    {
      name: "Sunay Patil",
      lastMessage: "some random message",
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      isActive: true,
      id: 2,
    },
    {
      name: "Vivek Ghulane",
      lastMessage: "something else",
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      isActive: false,
      id: 3,
    },
    {
      name: "Vivek Ghulane",
      lastMessage: "something else",
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      isActive: false,
      id: 4,
    },
    {
      name: "Vivek Ghulane",
      lastMessage: "something else",
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      isActive: false,
      id: 5,
    },
  ];
  const [filteredContacts, setFilteredContacts] = useState([contacts]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className={classes.main}>
      <div className={classes.head}>
        <div className={classes.img_head}>
          <img
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            alt=""
          />
          <h1
            style={{
              color: "#FFF",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Messaging{" "}
          </h1>
        </div>
        <svg
          style={{ cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.546 11.646L19 9.10101V5.50001C19 5.3674 18.9473 5.24023 18.8536 5.14646C18.7598 5.05269 18.6326 5.00001 18.5 5.00001H14.899L12.353 2.45401C12.2592 2.36027 12.1321 2.30762 11.9995 2.30762C11.8669 2.30762 11.7398 2.36027 11.646 2.45401L9.10101 5.00001H5.50001C5.3674 5.00001 5.24023 5.05269 5.14646 5.14646C5.05269 5.24023 5.00001 5.3674 5.00001 5.50001V9.10101L2.45401 11.647C2.36027 11.7408 2.30762 11.8679 2.30762 12.0005C2.30762 12.1331 2.36027 12.2602 2.45401 12.354L5.00001 14.899V18.5C5.00001 18.6326 5.05269 18.7598 5.14646 18.8536C5.24023 18.9473 5.3674 19 5.50001 19H9.10101L11.647 21.546C11.7408 21.6397 11.8679 21.6924 12.0005 21.6924C12.1331 21.6924 12.2602 21.6397 12.354 21.546L14.899 19H18.5C18.6326 19 18.7598 18.9473 18.8536 18.8536C18.9473 18.7598 19 18.6326 19 18.5V14.899L21.546 12.353C21.6397 12.2592 21.6924 12.1321 21.6924 11.9995C21.6924 11.8669 21.6397 11.7398 21.546 11.646ZM12 16C10.9391 16 9.92173 15.5786 9.17158 14.8284C8.42144 14.0783 8.00001 13.0609 8.00001 12C8.00001 10.9391 8.42144 9.92173 9.17158 9.17158C9.92173 8.42144 10.9391 8.00001 12 8.00001C13.0609 8.00001 14.0783 8.42144 14.8284 9.17158C15.5786 9.92173 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={classes.search}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
      </div>
      <div style={{ width: "100%" }}>
        {filteredContacts.map((contact, index) => {
          return (
            <Contact
              key={index}
              name={contact.name}
              img={contact.img}
              lastMessage={contact.lastMessage}
              isActive={contact.isActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Messaging;
