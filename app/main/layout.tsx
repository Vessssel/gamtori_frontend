export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>
        메뉴입니다.
      </div>
      {children}
    </div>
  )
}
