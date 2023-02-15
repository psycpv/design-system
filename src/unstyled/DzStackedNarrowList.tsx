import React from 'react';

interface PeopleNarrowList {
  name?: string;
  email?: string;
  image?: string;
}
export interface DzStackedNarrowListProps {
  people: PeopleNarrowList[];
}

export const DzStackedNarrowList: React.FunctionComponent<DzStackedNarrowListProps> = ({
  people,
}) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {people.map(person => (
        <li key={person.email} className="flex py-4">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DzStackedNarrowList;
