import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React Conditional Rendering</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new Component Hello return a h2 with the word "Hello" in it.
        Include the component here.
      </p>
      <Weather />

      <h3>Challenge 2</h3>
      <p>
        Send a property language and the component should render "Bonjour" if
        language is french and "Hello" in other cases. Include the component
        here for English and French
      </p>
      <Weather language="French" />
      <Weather language="English" />

      <h3>Challenge 3</h3>
      <p>
        Add the ability for the component to render "Hola" for Spanish. Include
        the component here for Spanish
      </p>
      <Weather language="Spanish" />
    </div>
  </StrictMode>
);
