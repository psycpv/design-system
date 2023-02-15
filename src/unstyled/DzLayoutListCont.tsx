import React from 'react';

interface Item {
  id: number;
}
export interface DzLayoutListContProps {
  items: Item[];
}

export const DzLayoutListCont: React.FunctionComponent<DzLayoutListContProps> = ({
  items,
}) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map(item => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  );
};

export default DzLayoutListCont;
