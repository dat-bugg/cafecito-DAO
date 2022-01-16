import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';

const Nav = () => {
    const [walletAddress, setWalletAddress] = useState('');


    useEffect(() => {
        loadWeb3();
    }, [])


    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        }

        await window.ethereum.send('eth_requestAccounts');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setWalletAddress(address);
    }

    const handleClick = async () => {
        if (window.ethereum === 'undefined') {
            console.log("Metamask not installed");
            return;
        }


        await window.ethereum.send('eth_requestAccounts');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setWalletAddress(address);

        let _hash = "Hash";
        let _metaHash = "MetaHash";

        console.log("walletAddress: " + walletAddress);
        // const mint = await window.contract.methods.mint(address,_hash, _metaHash).send({ from: address });


    }

    const shortenAddress = (str) => {
        return str.substring(0, 3) + ".." + str.substring(str.length - 3);
    }

    return (
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

                    {
                        walletAddress === '' &&
                        <button onClick={handleClick} className='px-4 py-2 font-baloo font-bold text-base text-[#AA7364] bg-white rounded-[16px] hover:text-[#754B40] flex items-center gap-4'>
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
                            <p className='font-baloo font-bold text-[#754B40] text-base'>{shortenAddress(walletAddress)}</p>
                        </div>

                    }
                </div>
            </nav>
    );
}

export default Nav;