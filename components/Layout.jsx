import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';
import Nav from './Nav';

const Layout = ({ children }) => {

    const [walletAddress, setWalletAddress] = useState('');

    async function load() {
        await loadWeb3();
        window.contract = await loadContract();
    }

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        }
    }

    const handleClick = async () => {
        if (window.ethereum === 'undefined') {
            console.log("Metamask not installed");
            return;
        }

        load();

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
        console.log(mint);

    }

    const shortenAddress = (str) => {
        return str.substring(0, 3) + ".." + str.substring(str.length - 3);
    }

    async function loadContract() {
        return await new window.web3.eth.Contract(
            [
                {
                    "inputs": [
                        {
                            "internalType": "contract CafecitoCurve",
                            "name": "_cafecitoCurve",
                            "type": "address"
                        },
                        {
                            "internalType": "contract CafecitoToken",
                            "name": "_cafecitoToken",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "burn",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "cafecitoCurve",
                    "outputs": [
                        {
                            "internalType": "contract CafecitoCurve",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "cafecitoToken",
                    "outputs": [
                        {
                            "internalType": "contract CafecitoToken",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "liquidity",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_hash",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "metadata",
                            "type": "string"
                        }
                    ],
                    "name": "mint",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "treasuryFunds",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            
        ], '0xCA6351B2D69dA0c83a74Dc9e02D4D86BBc10f976');
    }

    async function mint() {
        const mintConst = await window.contract.methods.treasuryFunds().send({ from: walletAddress });
    }

    return (
        <div className='w-screen h-screen bg-[#5E28BA] overflow-hidden'>
            <Head>
                <title>Cafecito DAO</title>
                <meta name="description" content="Cafecito DAO" />
                <link rel="icon" href="/cafecito.png" />
            </Head>

            <Nav />
        
            {children}
        </div>
    );
}

export default Layout;