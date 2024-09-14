import { render , screen } from "@testing-library/react"
import RestaurantCard from "../Restaurant"
import {MOCK_DATA} from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


it("Should render the Restaurant card which has props ", ()=>{
    render(<RestaurantCard resdata={MOCK_DATA}/>)

    const name = screen.getByText("Domino's Pizza")
    expect(name).toBeInDocument();
});