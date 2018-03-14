import React from 'react'
import { render } from 'react-dom'

import 'assets/styles/styles.scss'
import App from 'components/App.jsx'

//websocket
import ws from 'utils/ws'

localStorage.removeItem('auth');

render(
	<App />,
	document.getElementById('react_app')
)
