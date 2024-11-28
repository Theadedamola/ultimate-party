import fabulous from '../assets/fabulous.jpeg'
import seyi from '../assets/seyinoni.jpeg'
import alejandro from '../assets/alejandro.jpeg'
import pelumi from '../assets/pelumi.jpeg'
import jb from '../assets/oluwajubelo.jpeg'
import babs from '../assets/babs.jpeg'

export interface Candidate {
  id: number
  name: string
  position: string
  image: string
  reason: string
  votingLink: string
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: 'Oluwapelumi',
    position: 'MVP',
    image: pelumi,
    reason:
      "Pelumi's exceptional availability, banter, analysis skills, combined with his unwavering commitment to the group, make him the perfect candidate for MVP.",
    votingLink: '#vote-sarah',
  },
  {
    id: 2,
    name: 'Fabulous Don',
    position: 'Fan and Most Active of the year',
    image: fabulous,
    reason:
      "Fabulous Don's dedication to our sport group is unmatched. His passion and knowledge make him an ideal candidate for Fan of the Year.",
    votingLink: '#vote-sarah',
  },
  {
    id: 3,
    name: 'SeyNoni The guy in a hat',
    position: 'Meme and funniest Member',
    image: seyi,
    reason:
      "SeyNoni's humor is contagious, making everyone laugh with his witty remarks and hilarious impressions. He's the life of the party and deserves to be crowned the funniest member of the year.",
    votingLink: '#vote-michael',
  },
  {
    id: 4,
    name: 'Alejadro Dm',
    position: 'Banter Lord of the year',
    image: alejandro,
    reason:
      'Alejandro Dm is the epitome of friendly banter, engaging in hilarious exchanges with all teams, making him the perfect candidate for Banter Lord of the year.',
    votingLink: '#vote-priya',
  },
  {
    id: 5,
    name: 'Oluwajubelo',
    position: 'Analyst of the year',
    image: jb,
    reason:
      "Oluwajubelo's exceptional analytical skills and consistent accuracy make her an outstanding candidate for Analyst of the Year.",
    votingLink: '#vote-sarah',
  },
  {
    id: 6,
    name: 'Badmus-Afefe sports',
    position: 'News Distributor of the Year',
    image: babs,
    reason:
      'Badmus-Afefe Sports keeps us informed with timely, accurate updates and breaking news, making them an essential part of our community. Their dedication and reliability make them the ideal candidate for News Distributor of the Year.',
    votingLink: '#vote-sarah',
  },
]
