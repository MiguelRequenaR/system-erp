import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Banner de promoción</p>
            <p className='text-sm text-muted-foreground'>
              Google AdSense
            </p>
          </div>
          <div>
            <div className='font-medium'>CTR: 4.5%</div>
            <div>Ganancia: $1,234</div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>FA</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Video de nueva promoción</p>
            <p className='text-sm text-muted-foreground'>
              Facebook Ads
            </p>
          </div>
          <div>
            <div className='font-medium'>CTR: 2.3%</div>
            <div>Ganancia: $1,234</div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Promoción de día festivo</p>
            <p className='text-sm text-muted-foreground'>
              Google Ad Manager
            </p>
          </div>
          <div>
            <div className='font-medium'>CTR: 1.2%</div>
            <div>Ganancia: $1,234</div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Banner de promoción</p>
            <p className='text-sm text-muted-foreground'>Google AdSense</p>
          </div>
          <div>
            <div className='font-medium'>CTR: 4.5%</div>
            <div>Ganancia: $1,234</div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>FA</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Gadget de promoción</p>
            <p className='text-sm text-muted-foreground'>
              Facebook Ads
            </p>
          </div>
          <div>
            <div className='font-medium'>CTR: 2.3%</div>
            <div>Ganancia: $1,234</div>
          </div>
        </div>
      </div>
    </div>
  )
}
