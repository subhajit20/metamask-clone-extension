import React from 'react'
import AddressPlaceHolder from "./AddressPlaceHolder";
import AccountBalance from './AccountBalance';
import AllFunctionalitiesHolder from './accountFunctions/AllFunctionalitiesHolder';

type Props = {}

const AccountDetailsHolder = (_props: Props) => {
  return (
    <React.Fragment>
        <AddressPlaceHolder />
        <AccountBalance />
        <AllFunctionalitiesHolder functionalites={
            [
                function h(){},function g(){}
            ]
        } />
    </React.Fragment>
  )
}

export default AccountDetailsHolder