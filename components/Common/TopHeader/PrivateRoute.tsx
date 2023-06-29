import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PrivateRoute = <P extends object>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> => {
  const AuthenticatedRoute: React.FC<P> = (props: P) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();

    // Check if user is authenticated
    useEffect(() => {
      const userToken = localStorage.getItem('userToken');
      if (userToken) {
        const userToken1 = JSON.parse(userToken);
        console.log('userToken', userToken);
        console.log('userToken1', userToken1.email);
        setIsAuthenticated(true);
      } else {
        router.push('/signin');
      }
    }, [router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedRoute;
};

export default PrivateRoute;