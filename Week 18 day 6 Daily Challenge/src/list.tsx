// src/List.tsx
import React from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={JSON.stringify(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default List;
