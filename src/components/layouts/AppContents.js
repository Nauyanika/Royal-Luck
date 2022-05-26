import React from 'react'
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom'
 
import Home from '../../views/Dashboard/Home';
import ViewAgent from '../../views/agents/ViewAgent';
import AddAgent from '../../views/agents/AddAgent';
import AddNewPlayer from '../../views/players/AddNewPlayer';
import PlayersList from '../../views/players/PlayersList';
import PointSettings from '../../views/points/PointSettings';
import TransactionReport from '../../views/points/TransactionReport';
import GameHistory from '../../views/game/GameHistory';
import AndarBaharGameHistory from '../../views/game/AndarBaharGameHistory';
import RoulletGameHistory from '../../views/game/RoulletGameHistory';
import FunTargetGameHistory from '../../views/game/FunTargetGameHistory';
import TripleChanceGameHistory from '../../views/game/TripleChanceGameHistory';
import SevenUpDownGameHistory from '../../views/game/SevenUpDownGameHistory';



import PlayerHistory from '../../views/players/PlayerHistrory';
import ShowCurrentBet from '../../views/gamebet/ShowCurrentBet';
import ChangePassword from '../../views/settings/ChangePassword';
import ChangeUserPassword from '../../views/settings/ChangeUserPassword';
import TransactionHistory from '../../views/payments/TransactionHistory';
import WithdrawRequest from '../../views/payments/WithdrawRequest';
import Cards from '../../views/Cards/Cards'
import UsersList from '../../views/Users/UsersList'

export default function AppContents() {
  return (
    <section className="content">
    <div className="container-fluid">
        <Route path="/" exact component={Home} /> 
        <Route path="/DistributorList" exact component={ViewAgent} /> 
        <Route path="/AddNewDistributor" exact component={AddAgent} /> 
        <Route path="/PlayersList" exact component={PlayersList} /> 
        <Route path="/AddnewPlayer" exact component={AddNewPlayer} /> 
        <Route path="/Transactions" exact component={TransactionHistory} /> 
        <Route path="/userWithdrawRequest" exact component={WithdrawRequest} /> 
        <Route path="/PlayersHistrory" exact component={PlayerHistory} /> 
        <Route path="/GamePlayHistory" exact component={GameHistory} /> 
        <Route path="/AndarBaharGamePlayHistory" exact component={AndarBaharGameHistory} />
        <Route path="/RoulletGamePlayHistory" exact component={RoulletGameHistory} />
        <Route path="/FunTargetGamePlayHistory" exact component={FunTargetGameHistory} /> 
        <Route path="/TripleChanceGamePlayHistory" exact component={TripleChanceGameHistory} /> 
        <Route path="/SevenUpGamePlayHistory" exact component={SevenUpDownGameHistory} /> 





        <Route path="/ShowCurrentBet" exact component={ShowCurrentBet} /> 
        <Route path="/ChangePassword" exact component={ChangePassword} /> 
        <Route path="/ResetUserPassword" exact component={ChangeUserPassword} /> 
        <Route path="/cards" exact component={Cards} /> 
        <Route path="/UsersList" exact component={UsersList} /> 
        </div>
    </section>
  )
}
