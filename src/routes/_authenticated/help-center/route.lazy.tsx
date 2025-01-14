import { createLazyFileRoute } from '@tanstack/react-router'
import Help from '@/features/help-center'

export const Route = createLazyFileRoute('/_authenticated/help-center')({
  component: Help,
})
