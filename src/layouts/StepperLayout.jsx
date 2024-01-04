import Stepper from "../components/stepper";
import StepperControl from "../components/stepper_control";

import Diri from "../layouts/data_layout/data_diri";
import Pendidikan from "../layouts/data_layout/data_pendidikan";
import Magang from "../layouts/data_layout/data_magang";
import Lampiran from "../layouts/data_layout/lampiran";
import { useState } from "react";

function StepperLayout() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Data Diri", "Data Pendidikan", "Data Magang", "Lampiran"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Diri />;
      case 2:
        return <Pendidikan />;
      case 3:
        return <Magang />;
      case 4:
        return <Lampiran />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "Selanjutnya" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    //
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2x1 pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Navigation Control */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        step={steps}
      />
    </div>
  );
}

export default StepperLayout;
