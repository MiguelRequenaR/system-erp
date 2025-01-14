import {
  IconCash,
  IconUsersGroup,
  IconUserShield,
} from '@tabler/icons-react'
import { UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['activo', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  ['inactivo', 'bg-neutral-300/40 border-neutral-300'],
  ['invitado', 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300'],
  [
    'suspendido',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10',
  ],
])

export const userTypes = [
  {
    label: 'Administrador',
    value: 'administrador',
    icon: IconUserShield,
  },
  {
    label: 'Colaborador',
    value: 'colaborador',
    icon: IconUsersGroup,
  },
  {
    label: 'Socio',
    value: 'socio',
    icon: IconCash,
  },
] as const
