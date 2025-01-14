"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "¿Cómo conecto mi cuenta de Google AdSense?",
    answer: "Para conectar su cuenta de Google AdSense, vaya a la página «Configuración» y haga clic en «Conectar cuentas. Siga las instrucciones para autorizar el acceso a sus datos de AdSense."
  },
  {
    question: "¿Puedo comparar datos de diferentes plataformas publicitarias?",
    answer: "Sí, puede comparar datos de diferentes plataformas como Google AdSense, Facebook Ads y Google Ad Manager. Utilice la función «Seleccionar plataforma» del panel de control para elegir y comparar varias plataformas."
  },
  {
    question: "¿Con qué frecuencia se actualizan los datos?",
    answer: "Los datos del panel se actualizan en tiempo real para la mayoría de las métricas. Sin embargo, algunas analíticas avanzadas pueden tener un retraso de hasta 24 horas en función de la disponibilidad de datos de la plataforma publicitaria."
  },
  {
    question: "¿Qué debo hacer si no veo ningún dato?",
    answer: "Si no está viendo ningún dato, asegúrese primero de que sus cuentas de anuncios están conectadas correctamente. Si el problema persiste, compruebe su selección de intervalo de fechas y asegúrese de que tiene campañas activas durante ese periodo. Si el problema persiste, póngase en contacto con nuestro equipo de asistencia."
  },
  {
    question: "¿Cómo puedo exportar mis datos de análisis?",
    answer: "Para exportar sus datos de análisis, navegue hasta la página 'Informes'. Seleccione los datos que desea exportar y haga clic en el botón «Exportar». Puede elegir entre los formatos CSV, Excel o PDF para su exportación."
  }
]

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
