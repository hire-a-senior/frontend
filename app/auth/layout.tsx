import TextLogo from '@/components/TextLogo'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex justify-center items-center m-4">
        <TextLogo />
      </div>
      <div>{children}</div>
    </div>
  )
}
