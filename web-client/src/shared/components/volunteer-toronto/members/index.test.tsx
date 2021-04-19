
import VtUsers from 'pages/volunteer-toronto/members'
import {render} from '@testing-library/react'
import Members from '.';
import { Provider } from 'react-redux';
import { store } from 'shared/redux';

describe('VT: Users', () => {
    render(
        <Provider store={store}>
            <Members />
        </Provider>
    )

    it('should render', ()=>{  
        expect(true).toBeTruthy()
    })
});