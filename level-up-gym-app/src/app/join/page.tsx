import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
