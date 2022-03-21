import { ReactNode } from 'react';

type MapListProps = {
  children: ReactNode;
  className: string;
}

function MapList({children, className }: MapListProps): JSX.Element {
  return (
    <section className={`${className} map`}>
      {children}
    </section>
  );
}

export default MapList;
