import type { Review } from '@/types'

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    location: 'Walthamstow',
    rating: 5,
    text: 'Absolutely brilliant service. I was locked out at 11pm and they arrived in under 25 minutes. The locksmith was professional, friendly, and had me back inside in 15 minutes. No damage to the lock at all. Highly recommend!',
    service: 'emergency-locksmith',
    date: '2025-04-15',
    verified: true,
  },
  {
    id: '2',
    author: 'James K.',
    location: 'Barking',
    rating: 5,
    text: 'Called after a break-in at 2am. They were there within 30 minutes and secured the property immediately. Fitted new high-security locks and gave great advice about improving our security. The price was very fair.',
    service: 'burglary-repair',
    date: '2025-04-02',
    verified: true,
  },
  {
    id: '3',
    author: 'Priya D.',
    location: 'Ilford',
    rating: 5,
    text: 'My UPVC door stopped opening — the mechanism had completely seized. London Locksmith Pro arrived the same afternoon and had it fixed within an hour. They even had the parts on the van. Great value for money.',
    service: 'upvc-door-repair',
    date: '2025-03-28',
    verified: true,
  },
  {
    id: '4',
    author: 'Marcus T.',
    location: 'Tottenham',
    rating: 5,
    text: 'Lost my keys on the way home from work. Called at 7pm and they arrived at 7:35pm — less than 35 minutes. Changed all the locks for me as a precaution. Very professional and the new locks feel much more secure.',
    service: 'lock-replacement',
    date: '2025-03-20',
    verified: true,
  },
  {
    id: '5',
    author: 'Amanda L.',
    location: 'East Ham',
    rating: 5,
    text: 'Key snapped in the front door lock. I panicked but they were so calm and reassuring on the phone. The locksmith extracted the broken key and replaced the cylinder without any drama. Brilliant service.',
    service: 'snapped-key-extraction',
    date: '2025-03-15',
    verified: true,
  },
  {
    id: '6',
    author: 'David O.',
    location: 'Dagenham',
    rating: 5,
    text: 'Needed a commercial locksmith for our office in Dagenham. They installed a new master key system and fitted anti-snap locks on all external doors. Professional throughout and completed the job on time.',
    service: 'commercial-locksmith',
    date: '2025-03-10',
    verified: true,
  },
  {
    id: '7',
    author: 'Fatima A.',
    location: 'Southall',
    rating: 5,
    text: 'Fantastic emergency service. I was locked out at midnight with my young children. They were so understanding and arrived quickly. Opened the door without any damage. I cannot recommend them highly enough.',
    service: 'house-lockout',
    date: '2025-03-05',
    verified: true,
  },
  {
    id: '8',
    author: 'Robert P.',
    location: 'Leyton',
    rating: 5,
    text: 'Installed a Yale smart lock on my front door. The locksmith was knowledgeable and patient explaining how everything works. The app setup was smooth. Now I can let family in remotely — brilliant!',
    service: 'smart-lock-installation',
    date: '2025-02-25',
    verified: true,
  },
  {
    id: '9',
    author: 'Chen W.',
    location: 'Stratford',
    rating: 5,
    text: 'Called them after attempting to DIY my lock repair — made things worse! The locksmith arrived quickly, diagnosed the problem immediately, and had it sorted in 30 minutes. Professional and very reasonably priced.',
    service: 'lock-repair',
    date: '2025-02-18',
    verified: true,
  },
  {
    id: '10',
    author: 'Nakita H.',
    location: 'Leytonstone',
    rating: 5,
    text: 'Outstanding service from start to finish. Called at 3am after discovering a break-in. They arrived in under 40 minutes, secured the property and fitted temporary boarding while we sorted insurance. True professionals.',
    service: 'burglary-repair',
    date: '2025-02-10',
    verified: true,
  },
  {
    id: '11',
    author: 'Gary B.',
    location: 'Chingford',
    rating: 5,
    text: 'Had a full security upgrade done — new anti-snap locks on all doors, window locks, and door reinforcement. The locksmith did a security survey and was very thorough. Felt much safer afterwards.',
    service: 'security-upgrades',
    date: '2025-02-02',
    verified: true,
  },
  {
    id: '12',
    author: 'Blessing O.',
    location: 'Plaistow',
    rating: 5,
    text: 'They unlocked my car when I left my keys inside at a supermarket car park. Arrived in 25 minutes. Very professional and careful with the car. Reasonable price for such fast service.',
    service: 'car-locksmith',
    date: '2025-01-25',
    verified: true,
  },
]

export const getReviewsByService = (serviceSlug: string): Review[] =>
  reviews.filter((r) => r.service === serviceSlug)

export const getReviewsByLocation = (location: string): Review[] =>
  reviews.filter((r) => r.location.toLowerCase() === location.toLowerCase())

export const getAverageRating = (): number => {
  const total = reviews.reduce((sum, r) => sum + r.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}
