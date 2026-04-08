import React, { Suspense } from 'react';
import Loading from './Loading';
import ErrorElem from './ErrorElem';
import ErrorBoundary from './ErrorBoundary';

const ComponentName = (name: string) => {
  return React.lazy(() => import(`../page/${name}/${name}.tsx`));
};

export function Component(props: { name: string }) {
  const Component = ComponentName(props.name);
  return (
    <ErrorBoundary fallback={<ErrorElem />}>
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
