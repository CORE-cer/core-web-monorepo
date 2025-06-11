import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <title>About | CORE Beta</title>
      <div>Hello /about!</div>
    </>
  );
}
