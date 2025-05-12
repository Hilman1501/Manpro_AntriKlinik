import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/hero";
import Section from "../components/section/section";
import Table from "../components/Table/table";
import Form from "../components/Form/Form";

function Home() {
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (patient) => {
    setPatients([...patients, { ...patient, status: "Menunggu" }]);
  };

  const handleToggleStatus = (index) => {
    const updatedPatients = [...patients];
    updatedPatients[index].status = updatedPatients[index].status === "Menunggu" ? "Menunggu" : "Dilayani";
    setPatients(updatedPatients);
  };

  return (
    <div>
      <Navbar />
      <main>
        <section id="home"> {/* ID untuk Home */}
          <Hero />
        </section>
        
        <section id="data-antrian"> {/* ID untuk Data Antrian */}
          <Section patients={patients} />
          <Table patients={patients} setPatients={setPatients} onToggleStatus={handleToggleStatus} />
        </section>
        
        <section id="data-pasien"> {/* ID untuk Data Pasien */}
          <Form onSubmit={handleAddPatient} />
        </section>

        <section id="form"> {/* ID untuk Form */}
          {/* Form lainnya jika diperlukan */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
