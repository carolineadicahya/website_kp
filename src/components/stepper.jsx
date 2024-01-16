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
            activeColor: "#1e40af",
            completedColor: "#1e40af",
            disabledColor: "#374151",
            size: 3,
          }}
          styleConfig={{
            activeBgColor: "#1e40af",
            completedBgColor: "#1e40af",
            inactiveBgColor: "#374151",
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
