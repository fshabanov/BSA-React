import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

interface Props {
	timeOut?: number;
	isProgressBar?: boolean;
	isNewestOnTop?: boolean;
	isCloseOnToastrClick?: boolean;
}

const Toastr: React.FC<Props> = ({
	timeOut = 4000,
	isCloseOnToastrClick = true,
	isProgressBar = true,
	isNewestOnTop = false,
}) => (
	<ReduxToastr
		timeOut={timeOut}
		position='top-right'
		transitionIn='fadeIn'
		transitionOut='fadeOut'
		progressBar={isProgressBar}
		closeOnToastrClick={isCloseOnToastrClick}
		newestOnTop={isNewestOnTop}
	/>
);

export default Toastr;
