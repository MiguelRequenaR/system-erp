import {
  IconHelp,
  IconLayoutDashboard,
  IconReport,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUsers,
} from '@tabler/icons-react'
import { AudioWaveform } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Trabajos más Inc',
      logo: AudioWaveform,
      plan: 'Enterprise',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Campañas',
          url: '/campaign',
          icon: IconLayoutDashboard,
        },        
        {
          title: 'Reportes',
          url: '/reports',
          icon: IconReport,
        },
        {
          title: 'Usuarios',
          url: '/users',
          icon: IconUsers,
        }
      ],
    },
    {
      title: 'Otros',
      items: [
        {
          title: 'Configuración',
          icon: IconSettings,
          items: [
            {
              title: 'Perfil',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Cuenta',
              url: '/settings/account',
              icon: IconTool,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
