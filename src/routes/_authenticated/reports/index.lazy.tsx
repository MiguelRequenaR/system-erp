import { createLazyFileRoute } from '@tanstack/react-router'
import Reports from '@/features/reports'

export const Route = createLazyFileRoute('/_authenticated/reports/')({
  component: Reports,
})
