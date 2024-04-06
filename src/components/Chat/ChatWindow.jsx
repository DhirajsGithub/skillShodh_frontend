import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./Messaging.module.css";
import chatsData from "./chats.json";

const ChatWindow = ({ user, backBtnHandler }) => {
  const { name, isActive, img, id } = user;
  const [writeMsg, setWriteMsg] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMsgBtnClick = useCallback(() => {
    if (writeMsg) {
      chatsData.conversation.push({
        owner: "User1",
        message: writeMsg,
        time: new Date().toLocaleTimeString(),
      });
      setWriteMsg("");
    }
  });

  useEffect(() => {
    scrollToBottom();
  }, [chatsData, sendMsgBtnClick]);
  return (
    <div style={{ justifyContent: "space-between" }} className={classes.main}>
      <div style={{ width: "100%" }}>
        <div className={classes.head}>
          <svg
            onClick={backBtnHandler}
            style={{ cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M19.207 6.99997H4.62097L9.91397 1.70697L8.49997 0.292969L0.792969 7.99997L8.49997 15.707L9.91397 14.293L4.62097 8.99997H19.207V6.99997Z"
              fill="white"
            />
          </svg>
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
        <div
          style={{ backgroundColor: "#28282D" }}
          className={classes.contactCover}
        >
          <div className={classes.contact}>
            <div className={classes.imgInfo}>
              <div style={{ position: "relative" }} className={classes.img}>
                <img src={img} alt="" />
                {isActive && (
                  <svg
                    style={{
                      position: "absolute",
                      left: "28px",
                      bottom: "-1px",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="3"
                      fill="white"
                      stroke="#23AD00"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
              <div className={classes.info}>
                <h1>{name}</h1>
                <p>{isActive ? "Active now" : "offline"}</p>
              </div>
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
                d="M20.4868 17.1402L16.4218 13.4442C16.2296 13.2696 15.9771 13.1764 15.7176 13.1845C15.4581 13.1925 15.2118 13.3011 15.0308 13.4872L12.6378 15.9482C12.0618 15.8382 10.9038 15.4772 9.71179 14.2882C8.51979 13.0952 8.15879 11.9342 8.05179 11.3622L10.5108 8.96824C10.6972 8.78737 10.8059 8.54106 10.814 8.28145C10.822 8.02183 10.7287 7.76928 10.5538 7.57724L6.85879 3.51324C6.68384 3.3206 6.44067 3.20374 6.18095 3.1875C5.92122 3.17125 5.66539 3.2569 5.46779 3.42624L3.29779 5.28724C3.1249 5.46075 3.02171 5.69169 3.00779 5.93624C2.99279 6.18624 2.70679 12.1082 7.29879 16.7022C11.3048 20.7072 16.3228 21.0002 17.7048 21.0002C17.9068 21.0002 18.0308 20.9942 18.0638 20.9922C18.3083 20.9786 18.5391 20.8749 18.7118 20.7012L20.5718 18.5302C20.7418 18.3333 20.8281 18.0776 20.8122 17.8179C20.7963 17.5582 20.6795 17.315 20.4868 17.1402Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* messages */}
        <div className={classes.messages}>
          {chatsData.conversation.map((msg, index) => {
            return (
              <div
                key={index}
                style={{ marginBottom: "10px" }}
                className={
                  msg.owner === "User1"
                    ? classes["sendMsgCover"]
                    : classes["receiveMsgCover"]
                }
              >
                <div
                  className={
                    msg.owner === "User1"
                      ? classes["sendMsg"]
                      : classes["receiveMsg"]
                  }
                >
                  <p>{msg.message}</p>
                </div>
                <p className={classes.time}>{msg.time}</p>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className={classes.foot}>
        <div className={classes.inputAttach}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.004 5H9C7.162 5 5.414 5.737 4.076 7.076C2.737 8.415 2 10.163 2 12C2 13.838 2.737 15.586 4.076 16.924C5.414 18.263 7.162 19 9 19H17V17H9C7.697 17 6.45 16.471 5.49 15.51C4.529 14.55 4 13.303 4 12C4 10.698 4.529 9.451 5.49 8.49C6.45 7.529 7.697 7 9 7H17H17.004C17.794 7 18.543 7.314 19.113 7.886C19.684 8.457 19.999 9.208 20 10.002C19.9997 10.3947 19.9214 10.7835 19.7696 11.1457C19.6179 11.5079 19.3957 11.8363 19.116 12.112C18.8392 12.3922 18.5098 12.6148 18.1466 12.7672C17.7835 12.9196 17.3938 12.9987 17 13H9C8.86963 12.9984 8.74086 12.9711 8.62108 12.9196C8.50129 12.8681 8.39286 12.7935 8.302 12.7C8.20794 12.609 8.13283 12.5003 8.08099 12.3802C8.02916 12.2601 8.00163 12.1308 8 12C8 11.748 8.11 11.493 8.301 11.302C8.39171 11.2079 8.50021 11.1327 8.6202 11.0809C8.7402 11.029 8.86929 11.0015 9 11H17V9H9C8.21 9 7.459 9.315 6.886 9.889C6.314 10.461 6 11.211 6 12C6 12.789 6.314 13.54 6.888 14.114C7.16401 14.3939 7.49277 14.6164 7.85529 14.7685C8.21781 14.9205 8.60688 14.9992 9 15H17.001C17.6572 14.9995 18.3068 14.8691 18.9123 14.6163C19.5178 14.3635 20.0673 13.9933 20.529 13.527C20.9948 13.0652 21.3644 12.5156 21.6167 11.9101C21.8689 11.3047 21.9988 10.6552 21.9987 9.99929C21.9986 9.34337 21.8686 8.69395 21.6161 8.08854C21.3637 7.48313 20.9939 6.93371 20.528 6.472C20.0674 6.0055 19.5186 5.63515 18.9137 5.38246C18.3087 5.12977 17.6596 4.99976 17.004 5Z"
              fill="#888888"
            />
          </svg>
          <textarea
            value={writeMsg}
            wrap="soft"
            onChange={(e) => setWriteMsg(e.target.value)}
            placeholder="write message..."
            type="text"
          />
        </div>
        <div className={classes.emojiMicSend}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
              fill="#8B8B8B"
            />
            <path
              d="M8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12Z"
              fill="#8B8B8B"
            />
            <path
              d="M15.493 11.986C16.3176 11.986 16.986 11.3176 16.986 10.493C16.986 9.66844 16.3176 9 15.493 9C14.6684 9 14 9.66844 14 10.493C14 11.3176 14.6684 11.986 15.493 11.986Z"
              fill="#8B8B8B"
            />
            <path
              d="M12 18C16 18 17 14 17 14H7C7 14 8 18 12 18Z"
              fill="#8B8B8B"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 12V6C16 3.783 14.215 1.979 12.021 1.979C11.9506 1.97943 11.8805 1.98781 11.812 2.004C10.7853 2.05378 9.81693 2.49636 9.10738 3.24016C8.39783 3.98395 8.00136 4.97205 8 6V12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12ZM10 12V6C10 4.897 10.897 4 12 4C12.0547 4.00002 12.1092 3.995 12.163 3.985C13.188 4.06 14 4.935 14 6V12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12Z"
              fill="#8B8B8B"
            />
            <path
              d="M6 12H4C4 16.072 7.061 19.436 11 19.931V22H13V19.931C16.939 19.436 20 16.073 20 12H18C18 15.309 15.309 18 12 18C8.691 18 6 15.309 6 12Z"
              fill="#8B8B8B"
            />
          </svg>
          <svg
            onClick={sendMsgBtnClick}
            style={{
              cursor: !writeMsg && "not-allowed",
              transform: !writeMsg && "none",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.4258 11.0952L4.42576 3.09517C4.25458 3.01462 4.06406 2.98428 3.87632 3.00768C3.68859 3.03108 3.51134 3.10725 3.36516 3.22735C3.21899 3.34745 3.10988 3.50656 3.05051 3.68619C2.99114 3.86582 2.98395 4.05861 3.02976 4.24217L4.24176 9.09117L11.9998 12.0002L4.24176 14.9092L3.02976 19.7582C2.98309 19.9419 2.98968 20.135 3.04877 20.3151C3.10787 20.4952 3.21702 20.6547 3.36346 20.7751C3.5099 20.8954 3.68757 20.9715 3.8757 20.9946C4.06382 21.0176 4.25461 20.9866 4.42576 20.9052L21.4258 12.9052C21.5976 12.8244 21.7428 12.6964 21.8446 12.5362C21.9463 12.3759 22.0004 12.19 22.0004 12.0002C22.0004 11.8103 21.9463 11.6244 21.8446 11.4642C21.7428 11.3039 21.5976 11.1759 21.4258 11.0952Z"
              fill="#5773FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
