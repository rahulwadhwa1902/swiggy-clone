import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "./../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// it("Should load Logo on rendering header", () => {
//     // Load Header
//     render(
//         <BrowserRouter>
//             <Provider store = {appStore}>
//                 <Header/>
//             </Provider>
//         </BrowserRouter>
    
//     )  
//     // Check if logo is loaded
//     const logo = screen.getAllByTestId("logo");
//     expect(logo[0].src).toBe("http://localhost/dummy.png");
// });

it("Should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    )
    const loginButton = screen.getByRole("button", {name : "Login"});
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    )
    const cartItem = screen.getByText("Cart(0)");
    expect(cartItem).toBeInTheDocument();
})

it("Should change Login button to Logout and Logout button to Login on click", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    )
    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton)
    
    const logoutButton = screen.getByRole("button", {name : "LogOut"});
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton)
    expect(loginButton).toBeInTheDocument();
})