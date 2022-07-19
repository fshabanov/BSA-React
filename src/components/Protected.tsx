import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
	shouldRedirect: boolean;
	redirectTo: string;
}

const Protected: React.FC<Props> = ({
	children,
	shouldRedirect,
	redirectTo,
}) => {
	if (shouldRedirect) {
		return <Navigate to={redirectTo} />;
	}
	return <>{children}</>;
};

export default Protected;
