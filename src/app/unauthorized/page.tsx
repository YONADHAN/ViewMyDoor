export default function UnauthorizedPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold text-red-600'>Access Denied</h1>
      <p>You are not authorized to view this page.</p>
    </div>
  )
}
