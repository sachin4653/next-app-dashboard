import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'
import {roboto} from '@/app/ui/fonts'

export default function RootLayout({children } : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <div className={`${roboto.className} antialised`}>{children}</div>
    </html>
  );
}
