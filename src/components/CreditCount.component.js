import { useContext } from 'react';
import { AccountContext } from '../contexts/Account.context'
function CreditCount() {
  const account = useContext(AccountContext);
  return account.credits
}
export default CreditCount;