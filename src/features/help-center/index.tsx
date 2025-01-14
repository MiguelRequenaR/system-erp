import { FAQAccordion } from "@/features/help-center/components/faq-accordion"
import { ContactForm } from "@/features/help-center/components/contact-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from '@/components/layout/header'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

export default function HelpPage() {
  return (
    <>
      <Header>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <div className="hidden flex-col md:flex">

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Ayuda y Soporte</h2>
          </div>
          <Tabs defaultValue="faq" className="space-y-4">
            <TabsList>
              <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
              <TabsTrigger value="contact">Contactar Soporte</TabsTrigger>
            </TabsList>
            <TabsContent value="faq" className="space-y-4">
              <FAQAccordion />
            </TabsContent>
            <TabsContent value="contact" className="space-y-4">
              <ContactForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
