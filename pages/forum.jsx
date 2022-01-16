import Layout from "../components/Layout";
const Index = () => {
    return (
        <Layout>
            <main className='w-screen h-screen flex flex-col items-center justify-center'>
                <div className="w-[20%] aspect-square">
                    <img className="w-full h-full object-scale-down" src="/cs.png" alt="" />
                </div>
                <p className="font-baloo font-bold text-[24px] mt-8 text-[#FFFCF8]">Coming soon!</p>
            </main>
        </Layout>
    );
}

export default Index;