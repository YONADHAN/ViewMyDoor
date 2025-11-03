export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className='h-16 w-full'></div>
      {children}
    </div>
  )
}
