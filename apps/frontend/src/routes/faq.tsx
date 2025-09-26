import { createFileRoute } from '@tanstack/react-router';
import FAQ from '@/components/FAQ';

export const Route = createFileRoute('/faq')({
  component: RouteComponent,
});

function RouteComponent() {
  return <FAQ />;
}