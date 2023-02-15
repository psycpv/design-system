import React from 'react';

interface StackedPerson {
  name?: string;
  imageUrl?: string;
  handle: string;
}
export interface DzStackedAvatarCTAProps {
  people: StackedPerson[];
}

export const DzStackedAvatarCTA: React.FunctionComponent<DzStackedAvatarCTAProps> = ({
  people,
}) => {
  return (
    <div>
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {people.map(person => (
            <li key={person.handle} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {'@' + person.handle}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </div>
  );
};

export default DzStackedAvatarCTA;
