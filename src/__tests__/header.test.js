import "@testing-library/jest-dom";
import { fireEvent, render , screen} from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from 'react-redux';
import appStore from "../Utilities/appStore";
import { BrowserRouter } from "react-router-dom";

describe("should run all the test",() =>{

  // beforeAll(()=>{
  //   console.log("before each")
  // })

test("should load header component",()=>{

    //render
    render(
        <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
    )
    
    //query

    const btn = screen.getByRole("button");

    //assert
    expect(btn ).toBeInTheDocument();
})

test("should load cart component",()=>{

  //render
  render(
      <Provider store={appStore}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
  )
  
  //query
  
  const cart = screen.getByText(/Cart/)

  //assert
  expect(cart).toBeInTheDocument();
})

test("should click event component",()=>{

  //render
  render(
      <Provider store={appStore}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
  )
  
  //query

  const btn = screen.getByRole("button",{name:"login"});

  fireEvent.click(btn);

  const btn1 = screen.getByRole("button",{name:"logout"});

  //assert
  expect(btn1).toBeInTheDocument();
})

})