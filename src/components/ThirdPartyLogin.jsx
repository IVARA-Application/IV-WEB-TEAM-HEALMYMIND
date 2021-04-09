import axios from "axios";
import React, { useState, useEffect } from "react";

function ThirdPartyLogin(props) {
  const [message, setMessage] = useState("Please wait while we log you in...");
  const queryObject = new URLSearchParams(window.location.search);
  const code = queryObject.get("code");
  useEffect(() => {
    console.log(code);
    if (!code)
      return setMessage(
        "We could not log you in. Please try again. If the issue persists, please contact support@mentorbaba.in and we will help you."
      );
    switch (props.type) {
      case "linkedin":
        axios
          .get(
            `https://vkrx5omg34.execute-api.ap-south-1.amazonaws.com/latest/redirect/linkedin?code=${code}`,
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500;
              },
            }
          )
          .then((response) => {
            if (response.data.success !== true) {
              return setMessage(
                response.data.message +
                  " Please retry or contact hello@iventorsinitiatives.com if the issue persists."
              );
            }
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("auth", "true");
            window.location.replace("/");
          })
          .catch((error) => {
            console.log(error);
            setMessage(
              "We could not log you in. Please try again. If the issue persists, please contact support@mentorbaba.in and we will help you."
            );
          });
        break;
      case "google":
        axios
          .get(
            `https://vkrx5omg34.execute-api.ap-south-1.amazonaws.com/latest/redirect/google?code=${code}`,
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500;
              },
            }
          )
          .then((response) => {
            if (response.data.success !== true) {
              return setMessage(
                response.data.message +
                  " Please retry or contact hello@iventorsinitiatives.com if the issue persists."
              );
            }
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("auth", "true");
            window.location.replace("/");
          })
          .catch((error) => {
            console.log(error);
            setMessage(
              "We could not log you in. Please try again. If the issue persists, please contact support@mentorbaba.in and we will help you."
            );
          });
        break;
      default:
        setMessage(
          "We could not log you in. Please try again. If the issue persists, please contact support@mentorbaba.in and we will help you."
        );
    }
  });
  return <div>{message}</div>;
}

export default ThirdPartyLogin;
