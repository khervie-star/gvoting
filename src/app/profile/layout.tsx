import {.slice}

RootLayout({
  children,
}: {
  children: React.ReactNode;
})=> {
    return (
        <div className="w-full h-full bg-[#001124] p-4 md:p-12 flex gap-4 items-center">
      {children}
  </div>
  )
};

export default Layout;
