import Footer from '@/components/Footer'
import RegisterHeader from '@/components/RegisterHeader'

interface RegisterProp {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: RegisterProp) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
