import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card'
import { stepperProps } from '@/lib/data/interface/stepper/stepper'
import { Loader2 } from 'lucide-react'
const Stepper = ({
  currentLabel,
  currentStep,
  numberOfSteps,
}: stepperProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {currentStep / numberOfSteps == 1
            ? 'Wrapping everything up'
            : currentLabel}
        </CardTitle>
        <CardDescription>
          {currentStep / numberOfSteps == 1 ? (
            <span className='flex'>
              <Loader2 className='animate-spin' />
              <span className='ml-1'>
                {"Please don't close your browser tab or go to another page"}
              </span>
            </span>
          ) : (
            ` ${currentStep + 1} out of ${numberOfSteps} steps`
          )}
          {currentStep / numberOfSteps == 1 ? null : (
            <div className={`mt-3 grid grid-cols-4 rounded-full h-2.5 gap-1`}>
              {[...Array(numberOfSteps)].map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index <= currentStep ? 'bg-primary' : 'bg-slate-600'
                    } h-2 w-full rounded-full`}
                  ></div>
                )
              })}
            </div>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default Stepper
