import MarkdownPage from '@/components/MarkdownPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MarkdownPage url="https://raw.githubusercontent.com/CORE-cer/CORE-docs/refs/heads/main/about-us.md" />;
}
