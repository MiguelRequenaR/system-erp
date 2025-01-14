import { IconHeadset, IconPhoneCall } from '@tabler/icons-react'
import { Button } from './ui/button'

export default function ComingSoon() {
  return (
    <div className='h-svh bg-gradient-to-t from-orange-500 to-secondary'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2 '>
        <IconHeadset size={72} />
        <h1 className='text-4xl font-bold leading-tight'>
          Reúnete con nosotros
        </h1>
        <p className='text-center '>
          Selecciona el horario que mas se adeqúe a tus necesidades. <br />
          Estaremos encantados de ayudarte.
        </p>
        <Button size='lg' className='mt-4'>
          Agendar reunión
          <IconPhoneCall className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
