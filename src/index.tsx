import { GlobalStyles } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "./Theme/MainTheme";
import RouteProvider from "./Provider/RouteProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#e5eaf4",
            backgroundImage: "url(" + "/Blue.jpg" + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          },
        }}
      />
      <RouteProvider />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
