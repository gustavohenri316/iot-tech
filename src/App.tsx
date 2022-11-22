import { Fragment } from "react";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/Global";

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router />
    </Fragment>
  )
}