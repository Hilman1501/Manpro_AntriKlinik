import { useState } from "react";
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
    updatedPatients[index].status =
      updatedPatients[index].status === "Menunggu"
        ? "Dilayani"
        : "Menunggu";
    setPatients(updatedPatients);
  };

  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="data-antrian">
        <Section patients={patients} />
        <Table
          patients={patients}
          setPatients={setPatients}
          onToggleStatus={handleToggleStatus}
        />
      </section>

     
      <section id="form">
        {/* Form lainnya jika diperlukan */}
      </section>
    </main>
  );
}

export default Home;
