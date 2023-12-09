import { featureDataType } from '@/data/interface/feature/feature.interface'
import combinationAnimation from '@/assets/combination_animation.json'
import documentAnimation from '@/assets/document_animation.json'
import graphAnimation from '@/assets/graph-animation.json'
import fileAnimation from '@/assets/file_animation.json'
import palleteAnimation from '@/assets/pallete_animation.json'
export const featureData: Array<featureDataType> = [
  {
    title: 'Supersize your solution',
    subtitle:
      'A collection of human resource features tightly integrated into one ecosystem',
    description:
      'Ea duis sint officia et pariatur aliqua et sunt adipisicing sint anim nostrud officia ex.Non est sint labore elit sint. Consectetur incididunt est veniam laboris. Deserunt occaecat culpa proident ut duis incididunt excepteur occaecat. Ea est fugiat elit nulla.',
    lottie: combinationAnimation,
  },
  {
    title: 'Performance are not just number',
    subtitle:
      "Get insights on how you are performing based on your organization's KPI",
    description:
      'Ea duis sint officia et pariatur aliqua et sunt adipisicing sint anim nostrud officia ex.Non est sint labore elit sint. Consectetur incididunt est veniam laboris. Deserunt occaecat culpa proident ut duis incididunt excepteur occaecat. Ea est fugiat elit nulla.',
    lottie: graphAnimation,
  },
  {
    title: 'Need something? we gotchu',
    subtitle:
      'File different types of request and get it approved within the system',
    description:
      'Ea duis sint officia et pariatur aliqua et sunt adipisicing sint anim nostrud officia ex.Non est sint labore elit sint. Consectetur incididunt est veniam laboris. Deserunt occaecat culpa proident ut duis incididunt excepteur occaecat. Ea est fugiat elit nulla.',
    lottie: fileAnimation,
  },
  {
    title: 'We keep things documented',
    subtitle:
      'No need for guessing as features and its descriptions are explained',
    description:
      'Ea duis sint officia et pariatur aliqua et sunt adipisicing sint anim nostrud officia ex.Non est sint labore elit sint. Consectetur incididunt est veniam laboris. Deserunt occaecat culpa proident ut duis incididunt excepteur occaecat. Ea est fugiat elit nulla.',
    lottie: documentAnimation,
  },
  {
    title: 'Access features anywhere',
    subtitle: 'A command pallete to easily find features across the system',
    description:
      'Ea duis sint officia et pariatur aliqua et sunt adipisicing sint anim nostrud officia ex.Non est sint labore elit sint. Consectetur incididunt est veniam laboris. Deserunt occaecat culpa proident ut duis incididunt excepteur occaecat. Ea est fugiat elit nulla.',
    lottie: palleteAnimation,
  },
]
