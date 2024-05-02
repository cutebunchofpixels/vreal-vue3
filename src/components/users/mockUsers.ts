import { Gender } from '@/types/models/Users/Gender'
import type { GorestUser } from '@/types/models/Users/GorestUser'
import { Status } from '@/types/models/Users/Status'

export const mockUsers: GorestUser[] = [
  {
    id: 6805378,
    name: 'Sen. Leela Kapoor',
    email: 'sen_leela_kapoor@ritchie.test',
    gender: Gender.Female,
    status: Status.Inactive
  },
  {
    id: 6805377,
    name: 'Dayamayee Kaul',
    email: 'dayamayee_kaul@ankunding-nicolas.test',
    gender: Gender.Female,
    status: Status.Inactive
  },
  {
    id: 6805376,
    name: 'Heema Varman',
    email: 'heema_varman@russel.test',
    gender: Gender.Female,
    status: Status.Active
  },
  {
    id: 6805375,
    name: 'Shashi Varma',
    email: 'shashi_varma@torphy.example',
    gender: Gender.Female,
    status: Status.Active
  },
  {
    id: 6805374,
    name: 'Girja Jha',
    email: 'jha_girja@dibbert-lockman.example',
    gender: Gender.Female,
    status: Status.Active
  },
  {
    id: 6805373,
    name: 'Chandrakala Ahuja',
    email: 'chandrakala_ahuja@torp-schiller.example',
    gender: Gender.Male,
    status: Status.Inactive
  },
  {
    id: 6805372,
    name: 'Nanda Gandhi Jr.',
    email: 'nanda_gandhi_jr@mcdermott-bartoletti.test',
    gender: Gender.Female,
    status: Status.Inactive
  },
  {
    id: 6805371,
    name: 'Aagam Jain',
    email: 'aagam_jain@bashirian-herman.example',
    gender: Gender.Male,
    status: Status.Inactive
  },
  {
    id: 6805370,
    name: 'Bhishma Pillai',
    email: 'bhishma_pillai@gleason-sanford.example',
    gender: Gender.Male,
    status: Status.Inactive
  },
  {
    id: 6805369,
    name: 'Tara Nehru',
    email: 'tara_nehru@halvorson-haag.example',
    gender: Gender.Female,
    status: Status.Inactive
  }
]
