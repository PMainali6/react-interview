import React, { Suspense } from 'react';
const Child = React.lazy(() => import('./Child'));

export default function SuspenseExample() {
    return(
        <Suspense fallback={<h1>Loading...</h1>}>
            <div>
                <h1>Parents</h1>
                <Child val="Param" />
            </div>
        </Suspense>
    )
}