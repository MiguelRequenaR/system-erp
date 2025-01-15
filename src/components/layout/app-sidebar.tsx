import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import logo from '../../assets/logo.png'
import { sidebarData } from './data/sidebar-data'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  return (
    <Sidebar collapsible='icon' variant='sidebar' {...props}>
      <SidebarHeader>
        <div className='flex items-center justify-between w-fit gap-1 collapsed:flex-col'>
          <img src={logo} alt='Logo' className='w-12 dark:invert' />
          {state !== 'collapsed' && (
            <span className='text-xl font-bold'>Trabajos Más</span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
