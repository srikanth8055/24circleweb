import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WinNGoComponent } from './win-ngo/win-ngo.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:"winngo",component:WinNGoComponent,
    children:[
      {
        path:"game",component:GameboardComponent
      },
      {
        path:"deposit",component:DepositComponent
      },
      {
        path:"withdraw",component:WithdrawComponent
      },
      {
        path:"GameRules",component:GameRulesComponent
      },
      {
        path:"TradeHistory",component:TradeHistoryComponent
      },
      {path:"",component:GameboardComponent},
    ]
  }, 
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"**",component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
