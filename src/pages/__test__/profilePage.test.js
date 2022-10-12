import { async } from "@firebase/util";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Profile from '../profilePage';
import App from '../../App';
import { Provider } from "react-redux";
import { store } from '../../store/store';

test('name display check', async() => {
    render (
        <Provider store={store}>
            <Profile />
        </Provider>
            );
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    const nameEl = await screen.findByText(/inputed name:/i);
    expect(nameEl).toBeInTheDocument();

    // screen.debug()
})