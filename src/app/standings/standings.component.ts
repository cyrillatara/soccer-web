import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Schedule } from '../interface/schedule';
import { Team } from '../interface/team';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
public UsingAync:Boolean = false;
public MyTeams : Team[];
public LeagueName:string;
public MySchedule : Schedule[];
public Standings : Rangking[];

  constructor(private_titleService:Title, private_soccerService: SoccerService) {
    this._titleService.setTitle('PErtandingan Sepakbola Negara Berkembang');
    this.getTeams();
    this.LeagueName = "Liga Ku";
    this.getSchedule();
    this.ComputerRangking();
  }

  ngOnInit(): void {
  }
  getTeams(){
    if(this.UsingAync){
      let xx = this._soccerService.getAllTeamsAsync();
        xx.then((Teams:Team[]=>this.MyTeams = Teams));
    }
    else{
      this.MyTeams = this._soccerService.getAllTeams();
    }
  }
}