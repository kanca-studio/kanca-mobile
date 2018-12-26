interface IUser {
  city: string
  contact: string
  country: string
  email: string
  name: string
  photo: string
  role: string
}

interface ICoordinate {
  _latitude: number
  _longitude: number
}

interface ICommunityLocation {
  city: string
  country: string
}

interface IEventLocation {
  address: string
  place_name: string
  coordinate: Coordinate
}

interface ICommunity {
  banner: string
  creator: User
  description: string
  location: CommunityLocation
  members: Array<User>
  name: string
}

interface IEvent {
  community: Community
  date: string
  description: string
  location: EventLocation
  name: string
  participants: Array<User>
}

declare module "*.png"
