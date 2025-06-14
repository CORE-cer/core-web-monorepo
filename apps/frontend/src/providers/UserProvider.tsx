import { UserContext } from '@/context/UserContext';
import { type ReactNode, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';

export function UserProvider({ children }: { children: ReactNode }) {
  const [cookies, setCookie] = useCookies(['userId']);

  useEffect(() => {
    if (!cookies.userId) {
      const newUserId = uuidv4();
      setCookie('userId', newUserId, { path: '/', sameSite: 'strict', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10) }); // Example: expires in 10 years
    }
  }, [cookies.userId, setCookie]);

  let userId: unknown = cookies.userId;
  if (!userId) {
    userId = 'guest';
  } else if (typeof userId !== 'string') {
    throw new Error('Invalid userId type in cookies');
  }
  const typedUserId = userId as string;

  return <UserContext.Provider value={{ userId: typedUserId }}>{children}</UserContext.Provider>;
}
