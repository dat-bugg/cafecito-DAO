import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }) => {

    const [walletAddress, setWalletAddress] = useState('');

    return (
        <div className='w-screen h-screen bg-[#5E28BA] overflow-hidden'>
            <Head>
                <title>Cafecito DAO</title>
                <meta name="description" content="Cafecito DAO" />
                <link rel="icon" href="/cafecito.png" />
            </Head>

            <nav className='w-full h-20 bg-[#FFE9D2] absolute top-0 flex items-center justify-between px-20'>
                <Link href='/'>
                    <img src="/logo.svg" alt="" />
                </Link>

                <div className='flex items-center gap-4'>
                    <Link href='/forum'>
                        <a className='font-baloo font-bold text-base text-[#AA7364] hover:text-[#754B40]' href="#">Forum</a>
                    </Link>
                    <Link href='/proposal'>
                        <a className='font-baloo font-bold text-base text-[#AA7364] hover:text-[#754B40]' href="#">Proposal</a>
                    </Link>

                    {  walletAddress ==='' &&

                    <button className='px-4 py-2 font-baloo font-bold text-base text-[#AA7364] bg-white rounded-[16px] hover:text-[#754B40] flex items-center gap-4'>
                        <img className='w-[20px] h-[20px]' src="/metamask.svg" alt="" />
                        Connect Wallet
                    </button>
                    }

                    {
                        walletAddress !== '' &&
                        <div className='flex items-center gap-2 px-4 py-2 bg-white rounded-[16px] border-2 border-[#754B40]'>
                            <div className='w-8 h-8'>
                                <img className='w-full h-full object-cover rounded-full' src="/dp.png" alt="" />
                            </div>
                            <p className='font-baloo font-bold text-[#754B40] text-base'>0x2..s4d</p>
                        </div>

                    }
                </div>
            </nav>
            {children}
        </div>
    );
}

export default Layout;