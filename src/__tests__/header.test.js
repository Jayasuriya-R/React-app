import "@testing-library/jest-dom";
import { render , screen} from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from 'react-redux';
import appStore from "../Utilities/appStore";
import { BrowserRouter } from "react-router-dom";


test("should load header component",()=>{

    render(
        <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
    )

    const btn = screen.getByRole("button");

    expect(btn ).toBeInTheDocument();
})