import Layout from "../../components/Layout";
import { getSvgPath } from 'figma-squircle';
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { ethers } from 'ethers';
import Web3 from 'web3';

const svgPath = getSvgPath({
    width: 302,
    height: 184,
    cornerRadius: 48,
    cornerSmoothing: 1
});

const svgPath2 = getSvgPath({
    width: 296,
    height: 178,
    cornerRadius: 46,
    cornerSmoothing: 1
});


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

const Index = () => {

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


    const router = useRouter();

    const handleMint = async () => {
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

        let _hash = "Hash";
        let _metaHash = "ipfs://qmtac54wrny5nyp4u2ete1w1hnwtyk8raitpi9o27smg9x/1.json";

        const mint = await window.contract.methods.mint(address,_hash, _metaHash).send({ from: address });
        console.log(mint);

        router.push("/mint/123123");
    }

    return (
        <Layout>
            <main className='w-screen h-screen flex flex-col items-center justify-center'>
                <div style={{ clipPath: `path('${svgPath}')` }} className='w-[302px] h-[184px] bg-[#AA7364] flex flex-col items-center justify-center'>
                    <div style={{ clipPath: `path('${svgPath2}')` }} className='w-[296px] h-[178px] bg-[#FFFCF8] flex flex-col items-center px-4 py-4 justify-evenly'>
                        <p className="font-baloo font-bold text-[24px] text-[#AA7364]">Mint an NFT</p>

                        <div className="flex items-center gap-2 self-center mx-auto w-full justify-center">
                            <p className="font-baloo text-center text-[#754B40] font-bold bg-[#FFE9D2] rounded-[16px] py-2 px-2 w-[50%]" type="number" >0</p>
                            <button onClick={handleMint} className='px-4 py-1 font-baloo font-bold text-base text-[#AA7364] hover:text-[#754B40] hover:border-[#aa7364] bg-[#FFE9D2] rounded-[16px] border-[3px] border-[#754B40] w-[40%]'>
                                Mint
                            </button>

                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Index;