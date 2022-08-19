import CardList from '../components/page/home/cardList';
import ConnectWithUs from '../components/page/home/connectwithus';
import Hero from '../components/page/home/hero';
import ServiceList from '../components/page/home/servicelist';
import WhyUs from '../components/page/home/whyus';
import Divider from '../components/ui/divider';

export default function Home() {
    return (
        <div>
            <Hero text={'Get consultancy from experts for all your queries'} />
            <CardList />
            <Divider />
            <WhyUs />
            <Divider />
            <ServiceList />
            <Divider />
            <ConnectWithUs />
        </div>
    );
}
