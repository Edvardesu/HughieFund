import Layout from "../components/layout";
import { NavBar, Footer, InvestList } from "@/Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";

const Index = () => {
  return (
    <section className="">
      <CrowdFundingProvider className="bg-blue-600">
        <NavBar />
        {/* <Component {...pageProps} /> */}
        <InvestList />
        <Footer />
      </CrowdFundingProvider>
    </section>
  );
};

export default Index;

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <Sidebar /> */}
      {page}
    </Layout>
  );
};