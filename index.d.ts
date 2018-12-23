interface User {
  city: string
  contact: string
  country: string
  email: string
  name: string
  photo: string
  role: string
}

interface Coordinate {
  _latitude: number
  _longitude: number
}

interface CommunityLocation {
  city: string
  country: string
}

interface EventLocation {
  address: string
  place_name: string
  coordinate: Coordinate
}

interface Community {
  banner: string
  creator: User
  description: string
  location: CommunityLocation
  members: Array<User>
  name: string
}

interface Event {
  community: Community
  date: string
  description: string
  location: EventLocation
  name: string
  participants: Array<User>
}
