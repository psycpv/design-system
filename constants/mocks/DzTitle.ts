export const pageData = {
  category: 'Category Title',
  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscin',
  subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscin',
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
  primaryCTA: {
    title: 'Button',
    description: 'Descriptive Title',
  },
};

export const sectionData = {
  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscin',
  subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscin',
  linkCTA: {
    text: 'View All',
    linkElement: 'a',
    url: '/',
  },
};

export const exhibitionData = {
  title: 'Sherrie Levine: Wood',
  location: {
    "name": "New York: 52 Walker",
    "_id": "63b5ee48-633f-4ef8-87d6-6f7174bea072",
    "type": "dz-gallery",
    "_updatedAt": "2023-07-21T23:13:39Z",
    "url": "https://www.52walker.com/",
    "timezone": "America/New_York",
    "_createdAt": "2023-05-12T19:49:56Z",
    "_rev": "xqt72NIuqWVl36Qb8SPtBi",
    "_type": "location",
    "photos": [
      {
        "_type": "image",
        "_key": "a3d7c298d494",
        "asset": {
          "_ref": "image-847168274a93a2d8551d3f85310d90ad70b19fb2-2459x1720-jpg",
          "_type": "reference"
        }
      }
    ],
    "hours": [
      {
        "day": "Monday",
        "availableTimes": [],
        "_type": "availabilityDay",
        "_key": "monday"
      },
      {
        "_key": "tuesday",
        "day": "Tuesday",
        "availableTimes": [
          {
            "from": "10:00 AM",
            "to": "6:00 PM",
            "_key": "4494f502f855",
            "_type": "availabilityDuration"
          }
        ],
        "_type": "availabilityDay"
      },
      {
        "_key": "wednesday",
        "day": "Wednesday",
        "availableTimes": [
          {
            "to": "6:00 PM",
            "_key": "4494f502f855",
            "_type": "availabilityDuration",
            "from": "10:00 AM"
          }
        ],
        "_type": "availabilityDay"
      },
      {
        "_type": "availabilityDay",
        "_key": "thursday",
        "day": "Thursday",
        "availableTimes": [
          {
            "_type": "availabilityDuration",
            "from": "10:00 AM",
            "to": "6:00 PM",
            "_key": "4494f502f855"
          }
        ]
      },
      {
        "_type": "availabilityDay",
        "_key": "friday",
        "day": "Friday",
        "availableTimes": [
          {
            "_type": "availabilityDuration",
            "from": "10:00 AM",
            "to": "6:00 PM",
            "_key": "4494f502f855"
          }
        ]
      },
      {
        "_key": "saturday",
        "day": "Saturday",
        "availableTimes": [
          {
            "_type": "availabilityDuration",
            "from": "10:00 AM",
            "to": "6:00 PM",
            "_key": "887f6c231a4e"
          }
        ],
        "_type": "availabilityDay"
      },
      {
        "_type": "availabilityDay",
        "_key": "sunday",
        "day": "Sunday",
        "availableTimes": [
          {
            "_key": "887f6c231a4e",
            "_type": "availabilityDuration",
            "from": "10:00 AM",
            "to": "6:00 PM"
          }
        ]
      }
    ],
    "address": {
      "_type": "address",
      "addressLine2": "Address Line 2",
      "state": "New York",
      "addressLine": "52 Walker Street",
      "country": "United States",
      "zipCode": "10013",
      "city": "New York"
    }
  }
}
