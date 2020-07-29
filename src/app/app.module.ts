import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinNGoComponent } from './win-ngo/win-ngo.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinNGoComponent,
    ProfileComponent,
    AboutComponent,
    GameboardComponent,
    DepositComponent,
    GameRulesComponent,
    TradeHistoryComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
