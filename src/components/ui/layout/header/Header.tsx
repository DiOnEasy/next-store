import logo from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from "react"


const Header: FC = () => {
    return <header className="px-5 py-2 grid" style={{
        gridTemplateColumns: '1fr 3fr 1fr'
    }}>
        <Link href={'/'}>
        <Image
        width={200}
        src={logo}
        alt='Logo'
        />
        </Link>
    </header>
}

export default Header