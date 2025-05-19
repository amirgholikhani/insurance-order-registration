export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full h-full">
      <div className='w-full max-w-[360px] bg-white h-full'>
        {children}
      </div>
    </div>
  )
}