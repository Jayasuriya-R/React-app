import "@testing-library/jest-dom";
import { fireEvent, render , screen} from "@testing-library/react";
import Body from "../components/Body";
import { Provider } from 'react-redux';
import appStore from "../Utilities/appStore";
import { BrowserRouter } from "react-router-dom";

test('should should render body', async ()=>{
    render(
    <Provider store={appStore}>
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
      </Provider>
      )


      const searchbtn = await screen.findByRole("button", { name:'Search'});

      const searchinput = screen.getByPlaceholderText("Find your food")

      fireEvent.change(searchinput, {target: {value: "ss"}});

      fireEvent.click(searchbtn);
      
      const rescard = screen.getAllByTestId("rescard");

      expect(rescard.length).toBe(3)
})