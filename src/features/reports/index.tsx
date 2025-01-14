import {
  IconBlocks,
  IconFlag,
  IconHeadset,
  IconPhoneCall,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/components/calendar-date-picker'
import { Header } from '@/components/layout/header'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import { ReportTable } from '@/features/reports/components/report-table'

export default function ReportsPage() {
  return (
    <>
      <Header>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <div className='flex-col md:flex'>
        <div className='flex-1 space-y-4 px-4 py-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>Reportes</h2>
            <div className='flex items-center space-x-2'>
              <CalendarDateRangePicker />
            </div>
          </div>
          <Tabs defaultValue='all' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='all'>Todos los reportes</TabsTrigger>
              <TabsTrigger value='campaigns'>Por Campañas</TabsTrigger>
              <TabsTrigger value='platforms'>Por Plataformas</TabsTrigger>
            </TabsList>
            <TabsContent value='all' className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Reportes totales
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>45</div>
                    <p className='text-xs text-muted-foreground'>
                      +5 respecto al mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Reportes de campañas
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>30</div>
                    <p className='text-xs text-muted-foreground'>
                      +3 respecto al mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Reportes de plataformas
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>15</div>
                    <p className='text-xs text-muted-foreground'>
                      +2 respecto al mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Reportes personalizados
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>5</div>
                    <p className='text-xs text-muted-foreground'>
                      +1 respecto al mes pasado
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className='grid gap-4 md:grid-cols-1'>
                <Card>
                  <CardHeader>
                    <CardTitle>Reportes recientes</CardTitle>
                    <CardDescription>
                      Listado de los reportes más recientes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ReportTable />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value='campaigns' className='space-y-4 '>
              <div className='m-auto flex  flex-col items-center justify-center gap-2 '>
                <IconFlag size={72} color='gray' />
                <h1 className='text-xl text-muted-foreground leading-tight'>
                  No hay campañas para mostrar
                </h1>
              </div>
            </TabsContent>
            <TabsContent value='platforms' className='space-y-4 '>
              <div className='m-auto flex  flex-col items-center justify-center gap-2 '>
                <IconBlocks size={72} color='gray' />
                <h1 className='text-xl text-muted-foreground leading-tight'>
                  No hay plataformas conectadas para mostrar
                </h1>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
