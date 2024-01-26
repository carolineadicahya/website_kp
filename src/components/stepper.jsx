import { Stepper, Step } from "react-form-stepper";
import PropTypes from "prop-types";

const CustomStepper = ({ activeStep }) => {
  return (
    <div className="flex">
      <div className="m-auto">
        <Stepper
          activeStep={activeStep}
          connectorStateColors="true"
          connectorStyleConfig={{
            activeColor: "#1e2022",
            completedColor: "#1e2022",
            disabledColor: "#374151",
            size: 2,
            dark: "ffffff",
          }}
          styleConfig={{
            activeBgColor: "#0b4d8c",
            completedBgColor: "#74914a",
            inactiveBgColor: "#3c4043",
          }}>
          <Step label="Data Diri" />
          <Step label="Data Pendidikan" />
          <Step label="Data Magang" />
          <Step label="Lampiran" />
        </Stepper>
      </div>
    </div>
  );
};

CustomStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default CustomStepper;
