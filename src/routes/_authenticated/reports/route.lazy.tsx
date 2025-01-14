import { createLazyFileRoute } from '@tanstack/react-router'
import Report from '@/features/reports'

export const Route = createLazyFileRoute('/_authenticated/reports')({
  component: Report,
})
