import { createLazyFileRoute } from '@tanstack/react-router'
import Campaign from '@/features/campaign'

export const Route = createLazyFileRoute('/_authenticated/campaign/')({
  component: Campaign,
})
