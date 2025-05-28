import { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: '1',
    name: 'Banking & Finance',
    clients: ['DBS', 'OCBC', 'CIMB', 'MasterCard'],
    icon: 'landmark',
  },
  {
    id: '2',
    name: 'Healthcare',
    clients: ['DocOncology', 'DocComply'],
    icon: 'heart-pulse',
  },
  {
    id: '3',
    name: 'Automotive',
    clients: ['Ford', 'Lincoln'],
    icon: 'car',
  },
  {
    id: '4',
    name: 'Shipping & Maritime',
    clients: ['Samudera', 'GlosSys'],
    icon: 'ship',
  },
  {
    id: '5',
    name: 'Retail & Consumer',
    clients: ['PetCo', 'FreeAppADay'],
    icon: 'shopping-bag',
  },
  {
    id: '6',
    name: 'Technology',
    clients: ['Landslide Technologies', 'CaseCompass'],
    icon: 'cpu',
  },
];