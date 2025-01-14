import ContentSection from '../components/content-section'
import ProfileForm from './profile-form'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Perfil'
      desc='Administre la configuración de su cuenta.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
