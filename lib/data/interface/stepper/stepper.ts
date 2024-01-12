export interface stepperProps {
  currentStep: number;
  numberOfSteps: number;
  currentLabel: string;
}

export interface stepFunctionProps {
  currentStep: number;
  numberOfSteps?: number;
}
