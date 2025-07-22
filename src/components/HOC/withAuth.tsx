import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

type AuthProps = {
    auth: string | null;
}
const withAuth = (WrappedComponent: React.ComponentType<AuthProps>) => {
    const AuthenticatedComponent: React.FC<any> = ({ ...props }) => {
        const navigate = useNavigate()
        const { auth } = useAuth()
        useEffect(() => {
            if (!auth) {
                navigate('/')
            }

        }, [auth, navigate])
        if (!auth) {
            return null
        }
        return <WrappedComponent auth={auth} {...props} />
    }
    return AuthenticatedComponent
}
export default withAuth