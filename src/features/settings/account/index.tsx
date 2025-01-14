import ContentSection from '../components/content-section'
import { AccountForm } from './account-form'

export default function SettingsAccount() {
  return (
    <ContentSection
      title='Cuenta'
      desc='Administre la configuración de su cuenta.'
    >
      <AccountForm />
    </ContentSection>
  )
}
