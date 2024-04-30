import Awardsection from "@/widgets/Awardsection";
import ContactForm from "@/widgets/ContactForm";
import Harmonise from "@/widgets/Harmonise";
import Homebanner from "@/widgets/Homebanner";
import Instagrampages from "@/widgets/Instagrampages";
import Orchestrating from "@/widgets/Orchestrating";
import Ourblog from "@/widgets/Ourblog";
import Ourhighlights from "@/widgets/Ourhighlights";
import Reviewsection from "@/widgets/Reviewsection";
import Videosection from "@/widgets/Videosection";
import WeddingReception from "@/widgets/WeddingReception";
// import BannerWord from "@/widgets/bannerWord";
// import Homebansample from "@/widgets/homebansample";


export default function Home() {
  return (
    <main>
      {/* <BannerWord></BannerWord> */}
      {/* <Homebansample></Homebansample> */}
      <Homebanner></Homebanner>
      {/* <Harmonise></Harmonise>
      <WeddingReception></WeddingReception>
      <Orchestrating></Orchestrating>
      <Videosection></Videosection>
      <Ourhighlights></Ourhighlights>
      <Reviewsection></Reviewsection>
      <Awardsection></Awardsection>
      <Ourblog></Ourblog>
      <Instagrampages></Instagrampages>
      <ContactForm></ContactForm> */}
    </main>
  );
}
