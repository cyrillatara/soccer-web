import { Schedule } from '../interface/schedule';
import { Team } from '../interface/team';

export const SEASON_SCHEDULE: Schedule[] = [
  {
    id: 1,
    playingDate: new Date(2021, 08, 10),
    HomeTeam: 'Persija',
    AwayTeam: 'Bali United',
    HomeScore: 3,
    AwayScore: 2,
    RefName: 'Gilang',
    notes: 'Pertandingan Overtime',
  },

  {
    id: 2,
    playingDate: new Date(2021, 08, 11),
    HomeTeam: 'EVOS',
    AwayTeam: 'Persipon',
    HomeScore: 3,
    AwayScore: 2,
    RefName: 'FAISAL',
    notes: 'Pertandingan Ngelek',
  },

  {
    id: 3,
    playingDate: new Date(2021, 08, 12),
    HomeTeam: 'RRQ',
    AwayTeam: 'AURA',
    HomeScore: 3,
    AwayScore: 0,
    RefName: 'Moontong',
    notes: 'Pertandingan Pasti Kalah',
  },

  {
    id: 4,
    playingDate: new Date(2021, 08, 13),
    HomeTeam: 'Persija',
    AwayTeam: 'Persib',
    HomeScore: 5,
    AwayScore: 6,
    RefName: 'Budi',
    notes: 'Pertandingan Kerusuhan',
  },

  {
    id: 5,
    playingDate: new Date(2021, 08, 14),
    HomeTeam: 'PSG FC',
    AwayTeam: 'RANS FC',
    HomeScore: 4,
    AwayScore: 4,
    RefName: 'Hamka',
    notes: 'Pertandingan Bertabur Uang',
  },
];
export const TEAMS: Team[] = [
  { id: 1, name: 'EVOS', type: 'Over 30' },
  { id: 2, name: 'Persipon', type: 'Over 30' },
  { id: 3, name: 'RRQ', type: 'Over 30' },
  { id: 4, name: 'AURA', type: 'Over 30' },
  { id: 5, name: 'PSG FC', type: 'Over 30' },
  { id: 6, name: 'Persija', type: 'Over 30' },
];
